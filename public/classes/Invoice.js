export class Invoice {
    constructor(details, from, amount) {
        this.details = details;
        this.from = from;
        this.amount = amount;
    }
    format() {
        return (`${this.from} owes $${this.amount} for ${this.details}`);
    }
}
