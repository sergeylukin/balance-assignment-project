import axios from 'axios';

import { IPivot } from '@balance/api-interfaces';

export interface IPivotService {
  findAll: () => Promise<IPivot[]>;
}

export const PivotService: IPivotService = {
  findAll: async () =>
    await axios.get(`/api/pivots`).then((response) => response.data),
};

export const api = {
  PivotService,
};

export default api;
