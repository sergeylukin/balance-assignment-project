import { Thunk, thunk, Action, action } from 'easy-peasy';
import { Injections } from '../';
import { IStoreModel } from './';
import { IPivot } from '@balance/api-interfaces';

interface IPivotModelState {
  pivots: IPivot[];
}

interface IPivotModelActions {
  setPivots: Action<this, IPivot[]>;
}

interface IPivotModelThunks {
  fetchAll: Thunk<IPivotModel, undefined, Injections, IStoreModel>;
}

export interface IPivotModel
  extends IPivotModelState,
    IPivotModelActions,
    IPivotModelThunks {}

export const pivotModel: IPivotModel = {
  pivots: [] as IPivot[],
  // ACTIONS
  setPivots: action((state, payload) => {
    state.pivots = payload;
  }),
  // THUNKS
  fetchAll: thunk(async (actions, payload, { injections }) => {
    const { PivotService } = injections;
    const pivots = await PivotService.findAll();
    actions.setPivots(pivots);
  }),
};
