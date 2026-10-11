import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './app-card.component.html',
    styleUrl: './app-card.component.scss',
})
export class AppCardComponent {
    @Input() icon?: string;
    @Input() title?: string;
    @Input() caption?: string;
    @Input() featured = false;
}
