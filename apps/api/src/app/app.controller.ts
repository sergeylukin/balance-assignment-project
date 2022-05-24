import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { keys } from 'ts-transformer-keys';
import { Convert2JSON } from '@balance/shared/csv';
import axios from 'axios';
import { IPivot, ICreatePivotParams } from '@balance/api-interfaces';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly dataService: PrismaService) {}

  @Get('pivots')
  async getAllPivots(): Promise<IPivot[]> {
    return this.dataService.pivot.findMany();
  }

  @Get('pivot/:id')
  async getPivotById(@Param('id') id: string): Promise<IPivot> {
    const IPivotKeys = keys<IPivot>();
    const IPivotSelectFields: Prisma.PivotSelect = IPivotKeys.reduce(
      (prev, curr) => {
        prev[curr] = true;
        return prev;
      },
      {}
    );

    // eslint-disable-next-line
    // @ts-ignore
    return this.dataService.pivot.findUnique({
      where: { id: Number(id) },
      select: IPivotSelectFields,
    });
  }

  @Post('pivot')
  async createPivot(
    @Body()
    pivotData: ICreatePivotParams
  ): Promise<number> {
    // - Fetch URL from `url` var
    const { url, column_name } = pivotData;
    const result = await axios.get(url);
    const json = Convert2JSON(result.data);

    // grab just Age
    const pivotArr = json
      .map((item) => {
        return item[column_name];
      })
      .filter((item) => item)
      .sort((a, b) => Number(a) - Number(b));

    const formattedAgeArrayString = '[' + pivotArr.join() + ']';

    // INSERT INTO DB
    const row = await this.dataService.pivot.create({
      data: {
        pivot: formattedAgeArrayString,
      },
    });
    return row.id;
  }
}
