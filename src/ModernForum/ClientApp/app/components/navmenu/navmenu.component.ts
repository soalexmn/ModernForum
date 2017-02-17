import { Component, animate, trigger, transition, style } from '@angular/core';



@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
    //animations: [trigger('enterAnimation', [
    //    transition(':enter', [
    //        style({ transform: 'translateX(100%)', opacity: 0 }),
    //        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
    //    ]),
    //    transition(':leave', [
    //        style({ transform: 'translateX(0)', opacity: 1 }),
    //        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    //    ])
    //])]
})
export class NavMenuComponent {
    showLeftNav: boolean = false; 

       
}
