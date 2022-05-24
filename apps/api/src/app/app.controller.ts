import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Convert2JSON } from '@balance/shared/csv';
import axios from 'axios';
import { IPivot, ICreatePivotParams } from '@balance/api-interfaces';

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
    return this.dataService.getPivotById(Number(id));
  }

  @Post('pivot')
  async createPivot(
    @Body()
    pivotData: ICreatePivotParams
  ): Promise<number> {
    const { url, column_name } = pivotData;
    const result = await axios.get(url);
    const arr = Convert2JSON(result.data, ',', column_name).sort(
      (a, b) => Number(a) - Number(b)
    );
    const row = await this.dataService.createPivotsFromArray(arr);
    return row.id;
  }
}
