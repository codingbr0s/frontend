export interface Invoice {
  from?: string;
  to?: string;
  iban: string,
  usage: string
  amount: number
}
