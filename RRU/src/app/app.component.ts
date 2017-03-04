import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h1 class="title">Angular Router</h1>
   <router-outlet></router-outlet>
<nav>
  <ul>
            <li>
                <a href="app/About/about.component.html">About</a>
            </li>
            <li>
                <a href="app/Contact/contact.component.html">Contact</a>
            </li>
        </ul>
</nav>`,
})

export class AppComponent {
}