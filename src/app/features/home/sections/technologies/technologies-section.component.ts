import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { AppCardComponent } from '../../../../shared/components/app-card/app-card.component';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'tools';

interface Technology {
    name: string;
    category: TechnologyCategory;
    icon: string;
}

@Component({
    selector: 'app-technologies-section',
    standalone: true,
    imports: [CommonModule, AppCardComponent, SectionHeadingComponent],
    templateUrl: './technologies-section.component.html',
    styleUrl: './technologies-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesSectionComponent {
    readonly initialVisibleCount = 6;
    readonly technologies: Technology[] = [
        { name: 'Angular', category: 'frontend', icon: '/icons/technologies/angular-original.svg' },
        { name: 'TypeScript', category: 'frontend', icon: '/icons/technologies/typescript-plain.svg' },
        { name: 'JavaScript', category: 'frontend', icon: '/icons/technologies/javascript-plain.svg' },
        { name: 'HTML', category: 'frontend', icon: '/icons/technologies/html5-plain.svg' },
        { name: 'CSS / SCSS', category: 'frontend', icon: '/icons/technologies/css3-plain.svg' },
        { name: 'Java', category: 'backend', icon: '/icons/technologies/java-plain.svg' },
        { name: 'Spring Boot', category: 'backend', icon: '/icons/technologies/spring-original.svg' },
        { name: 'Node.js', category: 'backend', icon: '/icons/technologies/nodejs-plain-wordmark.svg' },
        { name: 'NestJS', category: 'backend', icon: '/icons/technologies/nestjs-original.svg' },
        { name: 'MySQL', category: 'database', icon: '/icons/technologies/mysql-original.svg' },
        { name: 'Git', category: 'tools', icon: '/icons/technologies/git-plain.svg' },
        { name: 'GitHub', category: 'tools', icon: '/icons/technologies/github-original.svg' },
    ];
    readonly showAllTechnologies = signal(false);
    readonly visibleTechnologies = computed(() => {
        const visibleCount = this.showAllTechnologies() ? this.technologies.length : this.initialVisibleCount;
        return this.technologies.slice(0, visibleCount);
    });

    toggleTechnologies(): void {
        this.showAllTechnologies.update((showAll) => !showAll);
    }
}
