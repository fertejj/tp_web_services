import { Component } from '@angular/core';
import { AutosService } from '../../services/autos/autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css',
})
export class AutosComponent {
  // me devuelve un array con 259 objetos cada objeto tiene un id y name
  constructor(private autosService: AutosService) {}

  makes: any[] = [];
  modelsByMake: any[]= [];

  getMakes() {
    return this.autosService.getMakes().subscribe(
      (response) => {
        console.log(response);
        this.makes = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getModels(makeId: string){
    return this.autosService.getModels(makeId).subscribe(
      (response) => {
        console.log(response);
        this.modelsByMake = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
