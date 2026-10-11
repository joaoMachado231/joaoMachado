import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeadingComponent } from './section-heading.component';

describe('SectionHeadingComponent', () => {
    let fixture: ComponentFixture<SectionHeadingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [SectionHeadingComponent] }).compileComponents();
        fixture = TestBed.createComponent(SectionHeadingComponent);
    });

    it('renders the supplied heading and description', () => {
        fixture.componentRef.setInput('eyebrow', 'TECNOLOGIAS');
        fixture.componentRef.setInput('title', 'Ferramentas');
        fixture.componentRef.setInput('titleId', 'tools-title');
        fixture.componentRef.setInput('description', 'Tecnologias utilizadas nos projetos.');
        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector('#tools-title')?.textContent).toContain('Ferramentas');
        expect(element.textContent).toContain('TECNOLOGIAS');
        expect(element.textContent).toContain('Tecnologias utilizadas nos projetos.');
    });
});