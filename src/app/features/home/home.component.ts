import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { ContactSectionComponent } from './sections/contact/contact-section.component';
import { AboutSectionComponent } from './sections/about/about-section.component';
import { ExperienceSectionComponent } from './sections/experience/experience-section.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { TechnologiesSectionComponent } from './sections/technologies/technologies-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, HeroSectionComponent, AboutSectionComponent, ExperienceSectionComponent, TechnologiesSectionComponent, ContactSectionComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent { }
