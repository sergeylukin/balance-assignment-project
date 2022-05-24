import { createStore, persist } from 'easy-peasy';
import model from './models';
import { PivotService, IPivotService } from '@balance/front-website/api';

export interface Injections {
  PivotService: IPivotService;
}

const store = createStore(persist(model), {
  injections: {
    PivotService,
  },
});

export default store;
