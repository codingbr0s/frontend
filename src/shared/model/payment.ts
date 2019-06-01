export interface Payment {
  creditor?: string,
  iban: string,
  desc: string,
  amount: number,
  displayamount: string
}
