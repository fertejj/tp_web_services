import { Component } from '@angular/core';
import { NoticiasService } from '../../services/noticias/noticias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css',
})
export class NoticiasComponent {
  noticias: any[] = [];

  constructor(private noticiasService: NoticiasService) {}

  getNoticias() {
    return this.noticiasService.getNoticias().subscribe(
      (data) => {
        console.log(data);
        for (let i = 0; i < 3; i++) {
          this.noticias[i] = data.homepageArticles[0].articles[i];
        }
        console.log(this.noticias);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getNoticias();
  }


}
