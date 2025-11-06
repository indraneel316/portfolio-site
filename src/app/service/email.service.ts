import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // TODO: Replace Public Key with your own EmailJS Public Key
  // Get from EmailJS Dashboard → Account → General
  private serviceId = 'service_wxr2sk7'; // ✅ Your EmailJS Service ID
  private templateId = 'template_p7q6o8l'; // ✅ Your EmailJS Template ID
  private publicKey = 'gWK_8t1hMIIBsSiWT'; // Get from EmailJS Dashboard → Account → General

  constructor() {
    // Initialize EmailJS with public key
    emailjs.init(this.publicKey);
  }

  sendEmail(formData: any): Observable<any> {
    return from(
      emailjs.send(this.serviceId, this.templateId, formData)
    );
  }
}