
export const CustomDataItemPropPrefix = "__"
export const ExtensionDataItemPropPrefix = "__ext__"

export enum NumberFormat {
  Generic = 'n2',
  Currency = 'c2',
  Percent = 'p2'
}

export enum DateFormat {
  DateShort = 'd',
  DateLong = 'D',
  TimeShort = 't',
  TimeLong = 'T',
  DateTimeShort = 'dd/MM/yyyy hh:mm:ss',
  DateTimeLong = 'F'
}

export enum ColumnWidth {
  DataHora = 150,
  Data = 100,
  Ativo = 100,
  Sigla = 100,
  MoedaValor = 80,
  NumSeq = 60,
  Quantidade = 80,
  Descricao = 300,
  Nome = 150,
  Codigo = 100,
  Booleano = 100,
  Inteiro = 80,
  Icone = 50,
  Fill = '*'
}

export enum ColumnSortBy {
  Asc = 'asc',
  Desc = 'desc'
}