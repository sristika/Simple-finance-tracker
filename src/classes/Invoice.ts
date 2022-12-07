import { formatter } from "../interfaces/formatter";
export class Invoice implements formatter{
  private details: string;
  private from : string;
  private amount:number;

  constructor (details: string, from: string, amount: number){
    this.details = details;
    this.from = from;
    this.amount = amount;
  }

  format():string{
    return (`${this.from} owes $${this.amount} for ${this.details}`);
  }
}

