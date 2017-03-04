import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<router-outlet name="header"></router-outlet>
<div class="container"><div class="row"><router-outlet></router-outlet></div></div>
<router-outlet name="footer"></router-outlet>
`,
})

export class AppComponent {
}