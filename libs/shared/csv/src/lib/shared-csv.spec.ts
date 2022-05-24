import { sharedCsv } from './shared-csv';

describe('sharedCsv', () => {
  it('should work', () => {
    expect(sharedCsv()).toEqual('shared-csv');
  });
});
