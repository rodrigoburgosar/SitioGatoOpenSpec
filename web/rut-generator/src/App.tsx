import { useState } from 'react';
import BatchRutForm from './components/BatchRutForm';
import SingleRutForm from './components/SingleRutForm';

export default function App() {
  const [mode, setMode] = useState<'single' | 'batch'>('single');

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Generador de RUT chileno</h1>
            <p className="text-sm text-slate-600">Modo individual y masivo con descarga Excel.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMode('single')}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                mode === 'single'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setMode('batch')}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                mode === 'batch'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Masivo
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {mode === 'single' ? <SingleRutForm /> : <BatchRutForm />}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <p className="text-sm text-slate-500">
            Generador de RUT exportable a Excel — diseñado para uso interno.
          </p>
        </div>
      </footer>
    </div>
  );
}
