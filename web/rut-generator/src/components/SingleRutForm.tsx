import { useMemo, useState } from 'react';
import { generateRandomRut, Rut } from '../utils/rut';

type Props = {
  onGenerated?: (rut: Rut) => void;
};

export default function SingleRutForm({ onGenerated }: Props) {
  const [rut, setRut] = useState<Rut | null>(null);
  const [status, setStatus] = useState<'idle' | 'generating' | 'copied'>('idle');
  const [error, setError] = useState<string | null>(null);

  const formattedRut = useMemo(() => rut?.formatted ?? '', [rut]);

  const handleGenerate = () => {
    setStatus('generating');
    setError(null);

    try {
      const generated = generateRandomRut();
      setRut(generated);
      setStatus('idle');
      onGenerated?.(generated);
    } catch (err) {
      setError('No se pudo generar el RUT. Intenta nuevamente.');
      setStatus('idle');
    }
  };

  const handleCopy = async () => {
    if (!rut) return;

    try {
      await navigator.clipboard.writeText(rut.formatted);
      setStatus('copied');
      window.setTimeout(() => setStatus('idle'), 1500);
    } catch {
      setError('No se pudo copiar al portapapeles.');
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-lg font-semibold">Generación individual</h2>
      <p className="mt-1 text-sm text-slate-600">
        Genera un RUT válido con formato estándar y cópialo al portapapeles.
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          {status === 'generating' ? 'Generando...' : 'Generar RUT'}
        </button>

        {rut && (
          <div className="rounded-md bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">RUT generado</p>
                <p className="text-xl font-semibold">{formattedRut}</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                {status === 'copied' ? 'Copiado' : 'Copiar'}
              </button>
            </div>
          </div>
        )}

        {error && <p className="text-sm text-rose-600">{error}</p>}
      </div>
    </div>
  );
}
