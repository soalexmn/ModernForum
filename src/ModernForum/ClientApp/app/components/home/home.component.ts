import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
