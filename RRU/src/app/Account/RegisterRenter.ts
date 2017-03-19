import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterRenterService } from './RegisterRenterService';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'RegisterRenter.html',
    providers: [RegisterRenterService]
})
export class RegisterRenterComponent {

    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    moveInDate: string;
    hearUsOptions = ['Google', 'Bing', 'Other'];
    hearUs: string;
    address1: string;
    address2: string;
    city: string;
    states = ['Alabama', 'Georgia', 'Tennessee'];
    state: string;
    zipCode: string;

    ngOnInit() {
        this.hearUs = this.hearUsOptions[0];
        this.state = this.states[0];  

        let output = this.registerRenterService.getUserInfo();

        this.firstName = "hello";
    }

    constructor(private registerRenterService: RegisterRenterService) {
       
    }

    ResetForm() {
        this.firstName = this.lastName = this.email = this.phoneNumber = this.password = this.confirmPassword = this.moveInDate = 
            this.address1 = this.address2 = this.city = this.state = this.zipCode = "";
        this.hearUs = this.hearUsOptions[0];
        this.state = this.states[0];
    }

    RegisterRenter() {
        this.firstName = "Ram";
        this.lastName = "Lanka";
        this.email = "Ramlanka7@gmail.com";
        this.phoneNumber = "571-247-6134";
        this.password = "asdfgh";
        this.confirmPassword = "asdfgh";
        this.moveInDate = "3/18/2017";
        this.address1 = "678 Callaway Ct";
        this.address2 = "";
        this.city = "Chattanooga";
        this.state = "TN";
        this.zipCode = "37421";



    }
  
}

