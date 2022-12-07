import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(details.value, toFrom.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(details.value, toFrom.value, amount.valueAsNumber);
    }
    let ul = document.querySelector('ul');
    let list = new ListTemplate(ul);
    list.render(doc, type.value, 'end');
});
