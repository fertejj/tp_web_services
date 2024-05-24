import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QrGeneratorService } from '../../services/qr-generator/qr-generator.service';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css',
})
export class QrGeneratorComponent {
  data: string = ""
  constructor(private qrGeneratorService: QrGeneratorService) {}
  generateQr(data: string) {
    const result = this.qrGeneratorService.getQr(data);
    console.log(result);
    return this.qrGeneratorService.getQr(data).subscribe(
      (qr) => console.log("QR:", qr),
      (error) => console.log("ERROR:", error)
    );
  }
}
