import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

export interface ProfessionalExperience {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    current?: boolean;
    description: string;
}

@Component({
    selector: 'app-experience-section',
    standalone: true,
    imports: [CommonModule, SectionHeadingComponent],
    templateUrl: './experience-section.component.html',
    styleUrl: './experience-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
    readonly currentLabel = 'Atual';

    readonly experiences: ProfessionalExperience[] = [
        {
            company: 'CI&T',
            role: 'Desenvolvedor de Software Pleno',
            startDate: 'ago/2024',
            current: true,
            description:
                'Desenvolvimento de apliacações web completas, com foco principal em frontend, utilizando tecnologias modernas e melhores práticas de desenvolvimento, visando a entrega de soluções eficientes e escaláveis.Além de atuar com desenvolvimento e estudos na área de backend, contribuindo para a construção de sistemas robustos e integrados.',
        },
        {
            company: 'CI&T',
            role: 'Desenvolvedor de Software Júnior',
            startDate: 'nov/2022',
            endDate: 'ago/2024',
            description:
                'Atuação no desenvolvimento e manutenção de sistemas, com foco em frontend, visando a entrega de soluções de alta qualidade e a melhoria contínua dos processos de desenvolvimento.',
        },
        {
            company: 'CI&T',
            role: 'Estagiário em Eng de Software',
            startDate: 'fev/2022',
            endDate: 'nov/2022',
            description: 'Estudos e aprendizados quanto ao ecossitema de desenvolvimento de software, com foco em boas práticas, versionamento e colaboração em equipe. Bem como primeiras experiências com a atuação prática em projetos reais.',
        },
    ];

    getPeriodLabel(experience: ProfessionalExperience): string {
        if (experience.current) {
            return `${experience.startDate} — ${this.currentLabel}`;
        }

        if (experience.endDate) {
            return `${experience.startDate} — ${experience.endDate}`;
        }

        return experience.startDate;
    }
}
