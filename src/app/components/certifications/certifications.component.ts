import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  imports: [CommonModule]  
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/69fa243293ba4bb5aa05b42bae3488b9',
      issuedDate: 'Current'
    }
  ];

  getCertificationLogo(title: string): string {
    if (title.includes('AWS')) return 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'; 
    if (title.includes('VMware')) return 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg';
    if (title.includes('Google')) return 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg';
    return 'assets/default-cert.svg'; // Fallback logo
  }
}