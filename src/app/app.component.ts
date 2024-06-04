// Importa i componenti necessari di Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet per gestire la navigazione e le rotte
import { HeaderComponent } from './components/layout/header/header.component'; // Importa il componente HeaderComponent
import { FooterComponent } from './components/layout/footer/footer.component'; // Importa il componente FooterComponent

@Component({
  selector: 'app-root', // Il tag HTML da utilizzare per questo componente principale
  standalone: true, // Indica che questo è un componente autonomo
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Specifica i moduli e i componenti da importare
  templateUrl: './app.component.html', // Il file di template per l'HTML del componente
  styleUrl: './app.component.css', // Il file di stile per il CSS del componente
})
export class AppComponent {}
