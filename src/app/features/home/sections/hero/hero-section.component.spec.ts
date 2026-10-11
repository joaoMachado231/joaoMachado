import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
    let fixture: ComponentFixture<HeroSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HeroSectionComponent] }).compileComponents();
        fixture = TestBed.createComponent(HeroSectionComponent);
        fixture.detectChanges();
    });

    it('renders the headline, calls to action, and statistic cards', () => {
        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector('h1')?.textContent).toContain('Construindo experiências digitais');
        expect(element.textContent).toContain('Conheça meus projetos');
        expect(element.querySelectorAll('.hero__stats app-card').length).toBe(4);
    });

    it('provides the CV download in the hero section', () => {
        const element = fixture.nativeElement as HTMLElement;
        const cvLink = element.querySelectorAll<HTMLAnchorElement>('.hero__actions app-button a')[1];

        expect(cvLink.getAttribute('href')).toBe('/documents/curriculo.pdf');
        expect(cvLink.getAttribute('download')).toBe('curriculo_joao_machado.pdf');
    });
});