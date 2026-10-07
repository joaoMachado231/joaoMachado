import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologiesSectionComponent } from './technologies-section.component';

describe('TechnologiesSectionComponent', () => {
    let fixture: ComponentFixture<TechnologiesSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [TechnologiesSectionComponent] }).compileComponents();
        fixture = TestBed.createComponent(TechnologiesSectionComponent);
        fixture.detectChanges();
    });

    it('initially renders six technology cards with a consistent size variant', () => {
        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelectorAll('.technologies__grid app-card').length).toBe(6);
        expect(element.textContent).toContain('Angular');
        expect(element.textContent).toContain('TypeScript');
        expect(element.textContent).not.toContain('Spring Boot');
        expect(element.querySelectorAll('.technologies__grid .app-card--featured').length).toBe(0);
        expect(element.querySelector('.technologies__toggle')?.textContent?.trim()).toBe('Mostrar mais');
    });

    it('expands to show the remaining cards and can collapse again', () => {
        const element = fixture.nativeElement as HTMLElement;
        const button = element.querySelector('.technologies__toggle') as HTMLButtonElement;

        button.click();
        fixture.detectChanges();

        expect(element.querySelectorAll('.technologies__grid app-card').length).toBe(12);
        expect(element.querySelectorAll('.technology-card--revealed').length).toBe(6);
        expect(button.getAttribute('aria-expanded')).toBe('true');
        expect(button.textContent?.trim()).toBe('Mostrar menos');

        button.click();
        fixture.detectChanges();

        expect(element.querySelectorAll('.technologies__grid app-card').length).toBe(6);
        expect(element.querySelectorAll('.technology-card--revealed').length).toBe(0);
        expect(button.getAttribute('aria-expanded')).toBe('false');
    });
});