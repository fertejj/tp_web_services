import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '../../services/translate/translate.service';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css',
})
export class TraductorComponent {
  texto: string = '';
  source: string = '';
  target: string = '';
  textoTraducido: string = '';
  languages: any[] = [];
  constructor(private translateService: TranslateService) {}

  obtenerLenguajes() {
    return this.translateService.getLanguages().subscribe(
      (data) => {
        this.languages = data.data.languages;
        console.log(this.languages);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  traducirTexto() {
    this.translateService
      .translateText(this.source, this.target, this.texto)
      .subscribe(
        (result) => {
          console.log(result);
          this.textoTraducido = result.data.translations[0].translatedText;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
