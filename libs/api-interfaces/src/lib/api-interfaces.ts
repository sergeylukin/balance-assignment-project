import { Pivot as PivotModel } from '@prisma/client';

export interface ICreatePivotParams {
  url: string;
  column_name: string;
}

// For our app usage, create a type that inherits interface from Prisma model
// except for columns we don't want application to expose
export type IPivot = Omit<PivotModel, 'createdAt'>;
