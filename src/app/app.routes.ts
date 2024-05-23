import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AutosComponent } from './components/autos/autos.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
  { path: 'traductor', component: TraductorComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'weather', component: WeatherComponent },
];
