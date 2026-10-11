import { TestBed } from '@angular/core/testing';
import { WhatsAppService } from './whatsapp.service';

describe('WhatsAppService', () => {
    let service: WhatsAppService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WhatsAppService);
    });

    it('creates a WhatsApp URL with the default portfolio message', () => {
        expect(service.getContactUrl()).toBe(
            'https://wa.me/5519997614074?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20desenvolvimento%20de%20software.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F',
        );
    });

    it('creates a WhatsApp URL for a custom message', () => {
        expect(service.getContactUrl('Olá, João!')).toBe('https://wa.me/5519997614074?text=Ol%C3%A1%2C%20Jo%C3%A3o!');
    });
});
