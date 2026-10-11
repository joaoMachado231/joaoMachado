import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { siteConfig } from '../../core/config/site.config';
import { WhatsAppService } from '../../core/services/whatsapp.service';
import { AppButtonComponent } from '../../shared/components/app-button/app-button.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, AppButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    readonly menuOpen = signal(false);
    readonly navigation = siteConfig.navigation;
    readonly whatsappUrl = inject(WhatsAppService).getContactUrl();
    readonly openMenuLabel = 'Abrir menu';
    readonly closeMenuLabel = 'Fechar menu';

    toggleMenu(): void {
        this.menuOpen.update((value) => !value);
    }

    closeMenu(): void {
        this.menuOpen.set(false);
    }
}
