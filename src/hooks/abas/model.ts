export const abasId = {
  grid: 'show-grid',
  cadastro: 'cadastro-interno',
} as const;

export type AbasIdKeys = keyof typeof abasId;

export type AbasIdValues = typeof abasId[AbasIdKeys];