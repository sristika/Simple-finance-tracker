import { formatter } from "../interfaces/formatter";

export class ListTemplate{
  constructor(private ul: HTMLUListElement){}

  render(str:formatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = str.format();
    li.append(p);

    if(pos === 'start'){
      this.ul.prepend(li);
    }else{
      this.ul.append(li);
    }
  }
}