

export interface Internos {
  id: string;
  nome: string;
  cpf?: string;
  idade: number;
  escolaridade: string;
  estadoNatural: EstadoIbge
  cidadeNatural: string;
  etnia: string;
}


export enum EstadoIbge {
  AC = 12,
  AL = 27,
  AP = 16,
  AM = 13,
  BA = 29,
  CE = 23,
  DF = 53,
  ES = 32,
  GO = 52,
  MA = 21,
  MT = 51,
  MS = 50,
  MG = 31,
  PA = 15,
  PB = 25,
  PR = 41,
  PE = 26,
  PI = 22,
  RJ = 33,
  RN = 24,
  RS = 43,
  RO = 11,
  RR = 14,
  SC = 42,
  SP = 35,
  SE = 28,
  TO = 17,
  AN = 91,
  EX = 99
}

export const EstadoDisplay: Record<string, string> = {
  [EstadoIbge.AC]: 'AC',
  [EstadoIbge.AL]: 'AL',
  [EstadoIbge.AP]: 'AP',
  [EstadoIbge.AM]: 'AM',
  [EstadoIbge.BA]: 'BA',
  [EstadoIbge.CE]: 'CE',
  [EstadoIbge.DF]: 'DF',
  [EstadoIbge.ES]: 'ES',
  [EstadoIbge.GO]: 'GO',
  [EstadoIbge.MA]: 'MA',
  [EstadoIbge.MT]: 'MT',
  [EstadoIbge.MS]: 'MS',
  [EstadoIbge.MG]: 'MG',
  [EstadoIbge.PA]: 'PA',
  [EstadoIbge.PB]: 'PB',
  [EstadoIbge.PR]: 'PR',
  [EstadoIbge.PE]: 'PE',
  [EstadoIbge.PI]: 'PI',
  [EstadoIbge.RJ]: 'RJ',
  [EstadoIbge.RN]: 'RN',
  [EstadoIbge.RS]: 'RS',
  [EstadoIbge.RO]: 'RO',
  [EstadoIbge.RR]: 'RR',
  [EstadoIbge.SC]: 'SC',
  [EstadoIbge.SP]: 'SP',
  [EstadoIbge.SE]: 'SE',
  [EstadoIbge.TO]: 'TO',
  [EstadoIbge.AN]: 'AN',
  [EstadoIbge.EX]: 'EX',
}
