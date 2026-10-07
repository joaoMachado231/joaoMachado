import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-heading',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section-heading.component.html',
    styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
    @Input() eyebrow = 'SEÇÃO';
    @Input() title = 'Título';
    @Input() titleId = 'section-heading-title';
    @Input() description?: string;
}
