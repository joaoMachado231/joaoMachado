import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
    });

    it('toggles the mobile navigation state', () => {
        const element = fixture.nativeElement as HTMLElement;
        const menuButton = element.querySelector('.menu-toggle') as HTMLButtonElement;

        expect(menuButton.getAttribute('aria-expanded')).toBe('false');
        menuButton.click();
        fixture.detectChanges();

        expect(menuButton.getAttribute('aria-expanded')).toBe('true');
        expect(element.querySelector('.site-nav')?.classList.contains('is-open')).toBe(true);
    });

    it('closes the mobile menu after navigating to a section', () => {
        const element = fixture.nativeElement as HTMLElement;
        const menuButton = element.querySelector('.menu-toggle') as HTMLButtonElement;
        menuButton.click();
        fixture.detectChanges();

        const technologiesLink = Array.from(element.querySelectorAll<HTMLAnchorElement>('.site-nav__link'))
            .find((link) => link.getAttribute('href') === '#technologies');

        expect(technologiesLink).toBeDefined();
        technologiesLink?.click();
        fixture.detectChanges();

        expect(menuButton.getAttribute('aria-expanded')).toBe('false');
        expect(element.querySelector('.site-nav')?.classList.contains('is-open')).toBe(false);
    });

    it('opens a WhatsApp conversation from the contact button', () => {
        const element = fixture.nativeElement as HTMLElement;
        const contactLink = element.querySelector('.site-header__actions .app-button') as HTMLAnchorElement;

        expect(contactLink.getAttribute('href')).toBe(
            'https://wa.me/5519997614074?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20desenvolvimento%20de%20software.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F',
        );
        expect(contactLink.getAttribute('target')).toBe('_blank');
        expect(contactLink.getAttribute('rel')).toBe('noopener noreferrer');
    });
});