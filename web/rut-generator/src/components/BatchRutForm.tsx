import { useMemo, useState } from 'react';
import { generateBatchRuts, Rut } from '../utils/rut';
import { downloadRutsExcel } from '../utils/excel';

type BatchRow = {
  n: number;
  rut: string;
  rutSans: string;
};

export default function BatchRutForm() {
  const [quantity, setQuantity] = useState<string>('10');
  const [status, setStatus] = useState<'idle' | 'generating' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<BatchRow[]>([]);

  const parsedQuantity = useMemo(() => Number(quantity), [quantity]);

  const validateQuantity = (value: number) => {
    if (Number.isNaN(value) || !Number.isInteger(value)) {
      return 'Ingresa un número válido.';
    }
    if (value < 1) {
      return 'La cantidad debe ser al menos 1.';
    }
    if (value > 10000) {
      return 'La cantidad no puede superar 10000.';
    }
    return null;
  };

  const handleGenerate = () => {
    const validation = validateQuantity(parsedQuantity);
    if (validation) {
      setError(validation);
      setRows([]);
      return;
    }

    setStatus('generating');
    setError(null);

    const generated = generateBatchRuts(parsedQuantity);
    const formattedRows = generated.map((rut, index) => ({
      n: index + 1,
      rut: rut.formatted,
      rutSans: rut.raw,
    }));

    setRows(formattedRows);
    setStatus('idle');
  };

  const handleDownload = () => {
    if (rows.length === 0) return;
    downloadRutsExcel(rows, 'ruts.xlsx');
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold">Generación masiva</h2>
      <p className="mt-1 text-sm text-slate-600">
        Genera varios RUTs de una sola vez y descárgalos en Excel.
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Cantidad</span>
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            min={1}
            max={10000}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleGenerate}
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {status === 'generating' ? 'Generando...' : 'Generar lista'}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={rows.length === 0}
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            Descargar Excel
          </button>
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        {rows.length > 0 && (
          <div className="mt-4 overflow-auto rounded-md border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">N°</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">RUT</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">RUT_SIN_FORMATO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {rows.map((row) => (
                  <tr key={row.n} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-700">{row.n}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-700">{row.rut}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-700">{row.rutSans}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
