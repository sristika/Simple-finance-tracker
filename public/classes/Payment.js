export class Payment {
    constructor(details, to, amount) {
        this.details = details;
        this.to = to;
        this.amount = amount;
    }
    format() {
        return (`${this.to} is owed $${this.amount} for ${this.details}`);
    }
}
