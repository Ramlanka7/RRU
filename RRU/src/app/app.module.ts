import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'about.component', component: AboutComponent },
    { path: 'contact.component', component: ContactComponent }
];


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, AboutComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
