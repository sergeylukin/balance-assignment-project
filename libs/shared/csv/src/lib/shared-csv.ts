type CSVItem = {
  [key: string]: string;
};

export const Convert2JSON = (
  csv: string,
  separator = ',',
  column_name = ''
): Record<string, string>[] => {
  const csvArr = csv.split('\n');
  const headers: string[] = csvArr[0].split(separator);
  const rows: any[] = csvArr.splice(1);
  const rowsWithColumns: any[][] = rows.map((row) => row.split(separator));

  const normalize = (str: string) => str.trim().replace(/[\s"]+/g, '');
  const json = rowsWithColumns.reduce((jsonArray, row) => {
    const item = row.reduce((item: CSVItem[], value: string, index: number) => {
      return { ...item, [normalize(headers[index])]: normalize(value) };
    }, {});
    return jsonArray.concat(item);
  }, []);

  if (column_name) {
    return json
      .map((item) => {
        return item[column_name];
      })
      .filter((item) => item);
  } else {
    return json;
  }
};
