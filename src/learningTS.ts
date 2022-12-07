
import {Invoice} from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { formatter } from "./interfaces/formatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
  e.preventDefault();

  let doc: formatter;
  if(type.value === 'invoice'){
    doc = new Invoice(details.value, toFrom.value, amount.valueAsNumber);
  }else{
    doc = new Payment(details.value, toFrom.value, amount.valueAsNumber);
  }

  let ul = document.querySelector('ul')!;
  let list = new ListTemplate(ul);
  list.render(doc, type.value, 'end');
})