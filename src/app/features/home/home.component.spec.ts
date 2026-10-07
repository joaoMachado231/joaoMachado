import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HomeComponent] }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
    });

    it('composes the header, home sections, and footer', () => {
        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector('app-header')).toBeTruthy();
        expect(element.querySelector('app-hero-section')).toBeTruthy();
        expect(element.querySelector('app-technologies-section')).toBeTruthy();
        expect(element.querySelector('app-footer')).toBeTruthy();
    });
});