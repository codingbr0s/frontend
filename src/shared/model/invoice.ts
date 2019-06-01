export interface Invoice {
  creditor?: string;
  iban: string,
  desc: string
  total: number
}
