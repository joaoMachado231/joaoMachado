import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSectionComponent } from './about-section.component';

describe('AboutSectionComponent', () => {
    let fixture: ComponentFixture<AboutSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [AboutSectionComponent] }).compileComponents();
        fixture = TestBed.createComponent(AboutSectionComponent);
        fixture.detectChanges();
    });

    it('renders the about story, highlights, principles, and photo placeholder', () => {
        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('section#sobre[aria-labelledby="about-title"]')).toBeTruthy();
        expect(element.querySelector('#about-title')?.textContent).toContain('Um pouco sobre quem está por trás do código.');
        expect(element.textContent).toContain('CI&T');
        expect(element.textContent).toContain('UFLA');
        expect(element.querySelectorAll('.about__highlight').length).toBe(3);
        expect(element.querySelectorAll('.about__principle').length).toBe(3);
        expect(element.querySelector('.about__portrait-placeholder')).toBeTruthy();
        expect(element.querySelector('.about__portrait img')).toBeNull();
    });
});