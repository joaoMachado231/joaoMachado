import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCardComponent } from './app-card.component';

describe('AppCardComponent', () => {
    let fixture: ComponentFixture<AppCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [AppCardComponent] }).compileComponents();
        fixture = TestBed.createComponent(AppCardComponent);
    });

    it('renders the supplied content and icon', () => {
        fixture.componentRef.setInput('icon', '/icons/angular.svg');
        fixture.componentRef.setInput('title', 'Angular');
        fixture.componentRef.setInput('caption', 'Frontend');
        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector('img')?.getAttribute('src')).toBe('/icons/angular.svg');
        expect(element.textContent).toContain('Angular');
        expect(element.textContent).toContain('Frontend');
    });

    it('applies the featured variant when enabled', () => {
        fixture.componentRef.setInput('featured', true);
        fixture.detectChanges();

        expect((fixture.nativeElement as HTMLElement).querySelector('.app-card--featured')).toBeTruthy();
    });
});