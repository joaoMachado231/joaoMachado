import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

interface AboutHighlight {
    value: string;
    label: string;
}

interface AboutPrinciple {
    number: string;
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-about-section',
    standalone: true,
    imports: [CommonModule, SectionHeadingComponent],
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
    readonly portraitSrc: string | null = null;

    readonly highlights: AboutHighlight[] = [
        { value: '4+ anos', label: 'de experiência' },
        { value: 'Sistemas de Informação', label: 'Bacharelado · UFLA' },
        { value: 'Desenvolvedor Pleno', label: 'CI&T' },
    ];

    readonly principles: AboutPrinciple[] = [
        {
            number: '01',
            icon: 'icons/technologies/brain.svg',
            title: 'Mentalidade',
            description: 'Aprender todos os dias, resolver problemas e evoluir com consistência',
        },
        {
            number: '02',
            icon: 'icons/technologies/goal.svg',
            title: 'Objetivo',
            description: 'Construir produtos que gerem valor real e façam a diferença na vida das pessoas.',
        },
        {
            number: '03',
            icon: 'icons/technologies/book-check.svg',
            title: 'Experiência',
            description: 'Transformar ideia em soluções através de código limpo e boas práticas',
        },
    ];
}