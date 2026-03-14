export type Rut = {
  formatted: string;
  raw: string;
};

const formatNumber = (value: number): string => value.toString().padStart(7, '0');

export function calculateRutDv(rawRut: string): string {
  const reversed = rawRut.split('').reverse();
  let multiplier = 2;
  let sum = 0;

  for (const digit of reversed) {
    sum += Number(digit) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = 11 - (sum % 11);
  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return String(remainder);
}

export function formatRut(rawRut: string): string {
  const digits = rawRut.replace(/\D/g, '');
  const padded = digits.padStart(8, '0');
  const body = padded.slice(0, -1);
  const dv = padded.slice(-1);

  const reversed = body.split('').reverse();
  const formattedBody = [] as string[];
  for (let i = 0; i < reversed.length; i += 1) {
    formattedBody.push(reversed[i]);
    if ((i + 1) % 3 === 0 && i + 1 < reversed.length) {
      formattedBody.push('.');
    }
  }

  const bodyFormatted = formattedBody.reverse().join('');
  return `${bodyFormatted}-${dv}`;
}

export function generateRandomRut(): Rut {
  // Generate between 1 and 99,999,999 (up to 8 digits)
  const base = Math.floor(Math.random() * 99_999_999) + 1;
  const raw = base.toString();
  const dv = calculateRutDv(raw);
  const formatted = formatRut(`${raw}${dv}`);

  return { raw: `${raw}${dv}`, formatted };
}

export function generateBatchRuts(count: number): Rut[] {
  const results: Rut[] = [];
  for (let i = 0; i < count; i += 1) {
    results.push(generateRandomRut());
  }
  return results;
}
