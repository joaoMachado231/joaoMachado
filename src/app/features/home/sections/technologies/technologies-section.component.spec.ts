import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologiesSectionComponent } from './technologies-section.component';

describe('TechnologiesSectionComponent', () => {
    let fixture: ComponentFixture<TechnologiesSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [TechnologiesSectionComponent] }).compileComponents();
        fixture = TestBed.createComponent(TechnologiesSectionComponent);
        fixture.detectChanges();
    });

    it('initially renders the configured technology groups without any item expanded', () => {
        const element = fixture.nativeElement as HTMLElement;
        const items = element.querySelectorAll('.technologies__container__item');

        expect(items.length).toBe(4);
        expect(element.textContent).toContain('Angular');
        expect(element.textContent).toContain('TypeScript');
        expect(element.textContent).toContain('Spring Boot');
        expect(element.querySelector('.technologies__container__item.open')).toBeNull();
    });

    it('expands and collapses a technology group as expected', () => {
        const element = fixture.nativeElement as HTMLElement;
        const button = element.querySelector('.technologies__container__item') as HTMLButtonElement;

        button.click();
        fixture.detectChanges();

        expect(button.classList.contains('open')).toBe(true);

        button.click();
        fixture.detectChanges();

        expect(button.classList.contains('open')).toBe(false);
    });
});