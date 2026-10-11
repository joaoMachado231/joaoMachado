import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
    let fixture: ComponentFixture<ContactSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [ContactSectionComponent] }).compileComponents();
        fixture = TestBed.createComponent(ContactSectionComponent);
        fixture.detectChanges();
    });

    it('uses the WhatsApp service for the contact call to action', () => {
        const element = fixture.nativeElement as HTMLElement;
        const contactLink = element.querySelector('.contact-card__actions app-button a') as HTMLAnchorElement;

        expect(contactLink.getAttribute('href')).toContain('https://wa.me/5519997614074?text=');
        expect(contactLink.getAttribute('target')).toBe('_blank');
        expect(contactLink.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('provides the CV download in the contact section', () => {
        const element = fixture.nativeElement as HTMLElement;
        const cvLink = element.querySelectorAll<HTMLAnchorElement>('.contact-card__actions app-button a')[1];

        expect(cvLink.getAttribute('href')).toBe('/documents/curriculo.pdf');
        expect(cvLink.getAttribute('download')).toBe('curriculo_joao_machado.pdf');
    });
});
