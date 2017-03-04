import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home';
import { SearchComponent } from './Home/Search';
import { HeaderComponent } from './Header/Header';
import { FooterComponent } from './Footer/Footer';
import { AdvertiseFreeComponent } from './Footer/AdvertiseFree';
import { AboutComponent } from './Footer/About';
import { PrivacyComponent } from './Footer/Privacy';
import { HelpComponent } from './Footer/Help';
import { SitemapComponent } from './Footer/Sitemap';
import { WhyRentersRusComponent } from './Footer/WhyRentersRus';
import { TermsOfUseComponent } from './Footer/TermsOfuse';
import { ContactComponent } from './Footer/Contact';
import { LoginComponent } from './Footer/Login';
import { PageNotFoundComponent } from './Errors/PageNotFound';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Search', component: SearchComponent },
    { path: 'Help', component: HelpComponent },
    { path: 'Privacy', component: PrivacyComponent },
    { path: 'Sitemap', component: SitemapComponent },
    { path: 'WhyRentersRus', component: WhyRentersRusComponent },
    { path: 'TermsOfUse', component: TermsOfUseComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'AdvertiseFree', component: AdvertiseFreeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Header', component: HeaderComponent },
    { path: 'Footer', component: FooterComponent },
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '*', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
    declarations: [AppComponent, HomeComponent, PrivacyComponent, HelpComponent,
        SitemapComponent, WhyRentersRusComponent, TermsOfUseComponent, SearchComponent,
        AboutComponent, ContactComponent, HeaderComponent, FooterComponent,
        AdvertiseFreeComponent, LoginComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }