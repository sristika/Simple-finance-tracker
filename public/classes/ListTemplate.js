export class ListTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(str, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = str.format();
        li.append(p);
        if (pos === 'start') {
            this.ul.prepend(li);
        }
        else {
            this.ul.append(li);
        }
    }
}
