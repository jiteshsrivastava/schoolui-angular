import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { NotificationComponent } from './components/notification/notification';
import { FacilitiesComponent } from './components/facilities/facilities';
import { AdmissionComponent } from './components/admission/admission';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';
import { PublicDisclosureComponent } from './components/public-disclosure/public-disclosure';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'public-disclosure', component: PublicDisclosureComponent },
  { path: '**', redirectTo: '' }
];
