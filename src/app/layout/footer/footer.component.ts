import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    readonly year = new Date().getFullYear();
    readonly navigation = siteConfig.navigation;
    readonly socialLinks = siteConfig.socialLinks;
}
