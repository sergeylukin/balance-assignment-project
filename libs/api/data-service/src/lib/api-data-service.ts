import { Prisma } from '@prisma/client';
import { keys } from 'ts-transformer-keys';
import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IPivot } from '@balance/api-interfaces';

@Injectable()
export class DataService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async getPivotById(id: number): Promise<IPivot> {
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
    return this.pivot.findUnique({
      where: { id: Number(id) },
      select: IPivotSelectFields,
    });
  }

  async createPivotsFromArray(arr): Promise<IPivot> {
    return await this.pivot.create({
      data: {
        pivot: `[${arr}]`,
      },
    });
  }
}
