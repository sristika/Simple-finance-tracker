import { formatter } from "../interfaces/formatter";
export class Payment implements formatter{
  private details: string;
  private to : string;
  private amount:number;

  constructor (details: string, to: string, amount: number){
    this.details = details;
    this.to = to;
    this.amount = amount;
  }

  format():string{
    return (`${this.to} is owed $${this.amount} for ${this.details}`);
  }
}

