
export const AVAILABLE_EXAMS = ["ADVANCED", "MAINS", "BITSAT"];

export const AVAILABLE_JOSSA_ORCRS = [
  { 2023: [1, 2, 3, 4, 5, 6] },
  { 2024: [1, 2, 3, 4, 5] },
  { 2025: [1, 2, 3, 4, 5, 6] }
]

export const AVAILABLE_CSAB_ORCRS = [
  { 2023: [1, 2] },
  { 2024: [1, 2] },
  { 2025: [1, 2] }
]

export const AVAILABLE_BITSAT_ORCRS = [
  { 2023: [1] },
  { 2024: [1] }
]

export const mostRecentJossaOrcr: { year: number, round: number } = AVAILABLE_JOSSA_ORCRS.reduce((latest, obj) => {
  const [yearStr, rounds] = Object.entries(obj)[0];
  const year = Number(yearStr);

  if (year > latest.year) {
    return { year, round: Math.max(...rounds) };
  } else if (year === latest.year) {
    return { year, round: Math.max(latest.round, ...rounds) };
  }
  return latest;
}, { year: 0, round: 0 });

export const jossaRoundByYearsGlobal: Record<number, number[]> = Object.fromEntries(
  AVAILABLE_JOSSA_ORCRS.map(obj => {
    const [year, rounds] = Object.entries(obj)[0];
    return [Number(year) as number, rounds as number[]];
  })
)

export const availableJossaYears: number[] = AVAILABLE_JOSSA_ORCRS.map(obj => Number(Object.keys(obj)[0]));

export const mostRecentCsabOrcr: { year: number, round: number } = AVAILABLE_CSAB_ORCRS.reduce((latest, obj) => {
  const [yearStr, rounds] = Object.entries(obj)[0];
  const year = Number(yearStr);

  if (year > latest.year) {
    return { year, round: Math.max(...rounds) };
  } else if (year === latest.year) {
    return { year, round: Math.max(latest.round, ...rounds) };
  }
  return latest;
}, { year: 0, round: 0 });

export const csabRoundByYearsGlobal: Record<number, number[]> = Object.fromEntries(
  AVAILABLE_CSAB_ORCRS.map(obj => {
    const [year, rounds] = Object.entries(obj)[0];
    return [Number(year) as number, rounds as number[]];
  })
)

export const availableCsabYears: number[] = AVAILABLE_CSAB_ORCRS.map(obj => Number(Object.keys(obj)[0]));

export const mostRecentBitsatOrcr: { year: number, round: number } = AVAILABLE_BITSAT_ORCRS.reduce((latest, obj) => {
  const [yearStr, rounds] = Object.entries(obj)[0];
  const year = Number(yearStr);

  if (year > latest.year) {
    return { year, round: Math.max(...rounds) };
  } else if (year === latest.year) {
    return { year, round: Math.max(latest.round, ...rounds) };
  }
  return latest;
}, { year: 0, round: 0 });

export const bitsatRoundByYearsGlobal: Record<number, number[]> = Object.fromEntries(
  AVAILABLE_BITSAT_ORCRS.map(obj => {
    const [year, rounds] = Object.entries(obj)[0];
    return [Number(year) as number, rounds as number[]];
  })
)

export const availableBitsatYears: number[] = AVAILABLE_BITSAT_ORCRS.map(obj => Number(Object.keys(obj)[0]));
