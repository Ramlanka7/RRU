import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'RegisterOwner.html'
})
export class RegisterOwnerComponent {

    ngOnInit() {
        // initialize user model here
        this.selectedOwnerType = this.ownerTypes[0].value;
        this.selectedOwner = this.owners[0].value;
        //this.user = {
        //    name: '',
        //    gender: this.genders[0].value, // default to Female
        //    role: null,
        //    theme: this.themes[0], // default to dark theme
        //    isActive: false,
        //    toggle: this.toggles[1].value, // default to untoggled
        //    topics: [this.topics[1].value] // default to Technology
        //}
    }

    public selectedOwnerType: string;
    public selectedOwner: string;
    
    public ownerTypes = [
        { value: '', display: '-- Select --' },
        { value: 'existing', display: 'Existing Owner' },
        { value: 'new', display: 'New Owner' }
    ];

    public owners = [
        { value: '0', name: '-- Select --' },
        { value: '1', name: 'Shallowford Trace' },
        { value: '2', name: 'Parc' },
        { value: '3', name: 'Heritage Gardens' }
    ];

}