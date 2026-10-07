import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, HeroSectionComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent { }
