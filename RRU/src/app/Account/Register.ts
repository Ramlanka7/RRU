import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'Register.html'
})
export class RegisterComponent{

    constructor(private router: Router) { }
    
    RegisterRenter() {
        this.router.navigate(['./RegisterRenter']);
    }

    RegisterOwner() {
        this.router.navigate(['./RegisterOwner']);
    }
}