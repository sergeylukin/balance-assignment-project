import { Convert2JSON } from './shared-csv';

describe('sharedCsv', () => {
  it('should work', () => {
    expect(Convert2JSON('1,2,3\nfoo,bar,baz', ',', '2')).toEqual(['bar']);
  });
});
