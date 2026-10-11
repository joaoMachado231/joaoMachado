import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsAppService {
    private readonly phoneNumber = '5519997614074';
    private readonly defaultMessage =
        'Olá! Vi seu portfólio e gostaria de conversar sobre um projeto de desenvolvimento de software. Poderia me passar mais informações?';

    getContactUrl(message = this.defaultMessage): string {
        return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    }
}
