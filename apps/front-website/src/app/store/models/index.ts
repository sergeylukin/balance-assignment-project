import { pivotModel, IPivotModel } from './pivot.model';

export interface IStoreModel {
  pivotModel: IPivotModel;
}

const model: IStoreModel = {
  pivotModel,
};

export default model;
