import { Component } from '@angular/core';
import { ListItems } from './app-types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Todo';

    listItems: ListItems[] = [
        {
            id: 1,
            name: 'Web Development',
            price: 300,
            toggle: true,
        },
        {
            id: 2,
            name: 'Design',
            price: 400,
            toggle: true,
        },
        {
            id: 3,
            name: 'Integration',
            price: 250,
            toggle: true,
        },
        {
            id: 4,
            name: 'Training',
            price: 220,
            toggle: true,
        },
    ];

    result: number = 0;

    handleClick(id: number, price: number, toggle: boolean) {
        if (toggle) {
            this.result += price;
            let item = this.listItems.filter(item => id === item.id);
            item[0].toggle = !toggle;
        } else {
            this.result -= price;
            let item = this.listItems.filter(item => id === item.id);
            item[0].toggle = !toggle;
        }
    }
}
