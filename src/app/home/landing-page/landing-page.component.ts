import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { ImagesGalleryComponent } from '../images-gallery/images-gallery.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ImagesGalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
