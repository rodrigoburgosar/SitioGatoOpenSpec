import * as XLSX from 'xlsx';

export function downloadRutsExcel(data: Array<{ n: number; rut: string; rutSans: string }>, fileName = 'ruts.xlsx') {
  const worksheetData = [
    ['N°', 'RUT', 'RUT_SIN_FORMATO'],
    ...data.map((row) => [row.n, row.rut, row.rutSans]),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'RUTs');

  const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}
