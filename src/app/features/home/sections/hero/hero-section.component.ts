import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { siteConfig } from '../../../../core/config/site.config';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';
import { AppCardComponent } from '../../../../shared/components/app-card/app-card.component';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule, AppButtonComponent, AppCardComponent],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
    readonly primaryCta = {
        label: 'Conheça minha trajetória',
        href: '#experiencia',
    };
    readonly secondaryCta = {
        label: 'Baixar meu CV',
        href: siteConfig.cvPath,
    };
    readonly stats = [
        { value: '+4', label: 'anos de experiência', icon: 'assets/chart-icon.svg' },
        { value: 'UFLA', label: 'Sistemas de Informação', icon: 'assets/graduation-cap.svg' },
        { value: '100%', label: 'foco em soluções reais', icon: 'assets/target-icon.svg' },
        { value: 'Aprendizado', label: 'contínuo', icon: 'assets/book-icon.svg' },
    ];
    readonly socialLinks = siteConfig.socialLinks.filter(
        (link) => link.icon === 'github' || link.icon === 'linkedin',
    );
}
