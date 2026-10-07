import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { AboutSectionComponent } from './sections/about/about-section.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { TechnologiesSectionComponent } from './sections/technologies/technologies-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, HeroSectionComponent, AboutSectionComponent, TechnologiesSectionComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent { }
