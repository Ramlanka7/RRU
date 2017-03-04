import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './Footer/About';
import { ContactComponent } from './Footer/Contact';
import { HeaderComponent } from './Header/Header';
import { FooterComponent } from './Footer/Footer';
import { AdvertiseFreeComponent } from './Footer/AdvertiseFree';
import { LoginComponent } from './Footer/Login';
import { PageNotFoundComponent } from './Errors/PageNotFound';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PageNotFoundComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'AdvertiseFree', component: AdvertiseFreeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Header', component: HeaderComponent },
    { path: 'Footer', component: FooterComponent },
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: '', component: FooterComponent, outlet: 'footer' }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
    declarations: [AppComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, AdvertiseFreeComponent, LoginComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }