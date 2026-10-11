import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [FooterComponent] }).compileComponents();
        fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
    });

    it('renders the owner and current year', () => {
        const content = (fixture.nativeElement as HTMLElement).textContent ?? '';
        expect(content).toContain('João Pedro');
        expect(content).toContain(String(new Date().getFullYear()));
    });
});