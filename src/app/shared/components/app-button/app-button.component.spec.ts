import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppButtonComponent } from './app-button.component';

describe('AppButtonComponent', () => {
    let fixture: ComponentFixture<AppButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [AppButtonComponent] }).compileComponents();
        fixture = TestBed.createComponent(AppButtonComponent);
    });

    it('renders its link, variant, and projected content', () => {
        fixture.componentRef.setInput('href', '#contact');
        fixture.componentRef.setInput('variant', 'secondary');
        fixture.detectChanges();

        const link = (fixture.nativeElement as HTMLElement).querySelector('a');
        expect(link?.getAttribute('href')).toBe('#contact');
        expect(link?.classList.contains('app-button--secondary')).toBe(true);
    });

    it('sets secure attributes for external links', () => {
        fixture.componentRef.setInput('external', true);
        fixture.detectChanges();

        const link = (fixture.nativeElement as HTMLElement).querySelector('a');
        expect(link?.getAttribute('target')).toBe('_blank');
        expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('sets the download attribute when requested', () => {
        fixture.componentRef.setInput('download', 'curriculo_joao_machado.pdf');
        fixture.detectChanges();

        const link = (fixture.nativeElement as HTMLElement).querySelector('a');
        expect(link?.getAttribute('download')).toBe('curriculo_joao_machado.pdf');
    });
});