import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideArrowRight, LucideDownload } from '@lucide/angular';
import { siteConfig } from '../../../../core/config/site.config';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [CommonModule, AppButtonComponent, LucideArrowRight, LucideDownload],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
    readonly primaryCta = {
        label: 'Entrar em contato',
        href: this.getPrimaryContactHref(),
        external: this.getPrimaryContactHref().startsWith('http'),
    };

    readonly secondaryCta = {
        label: 'Ver meu CV',
        href: siteConfig.cvPath || '#contato',
        external: false,
    };

    private getPrimaryContactHref(): string {
        const email = siteConfig.contact?.email?.trim();

        if (email) {
            return `mailto:${email}`;
        }

        const linkedin = siteConfig.socialLinks.find((link) => link.icon === 'linkedin')?.href;

        if (linkedin) {
            return linkedin;
        }

        return '#contato';
    }
}
