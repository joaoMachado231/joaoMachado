import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LucideArrowRight, LucideDownload } from '@lucide/angular';
import { siteConfig } from '../../../../core/config/site.config';
import { WhatsAppService } from '../../../../core/services/whatsapp.service';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';

@Component({
    selector: 'app-contact-section',
    standalone: true,
    imports: [CommonModule, AppButtonComponent, LucideArrowRight, LucideDownload],
    templateUrl: './contact-section.component.html',
    styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
    private readonly whatsappService = inject(WhatsAppService);

    readonly primaryCta = {
        label: 'Entrar em contato',
        href: this.whatsappService.getContactUrl(),
        external: true,
    };

    readonly secondaryCta = {
        label: 'Ver meu CV',
        href: siteConfig.cvPath,
        external: false,
        download: 'curriculo_joao_machado.pdf',
    };
}
