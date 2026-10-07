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
});