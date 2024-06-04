// Importa il tipo Routes da @angular/router per definire le rotte dell'applicazione
import { Routes } from '@angular/router';

// Esporta una costante chiamata routes che contiene la definizione delle rotte
export const routes: Routes = [
  {
    // Definisce la rotta per il percorso vuoto (root)
    path: '',
    // Utilizza il lazy loading per caricare il componente HomeComponent solo quando la rotta è attivata
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    // Definisce la rotta per il percorso 'submit'
    path: 'submit',
    // Utilizza il lazy loading per caricare il componente SubmitComponent solo quando la rotta è attivata
    loadComponent: () =>
      import('./pages/submit/submit.component').then((m) => m.SubmitComponent),
  },
];
