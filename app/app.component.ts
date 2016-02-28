import {Component,Attribute} from 'angular2/core';

@Component({
    selector: 'sg-my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent {
    constructor(@Attribute('label') public lalal){}
}
