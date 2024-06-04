// Importa i componenti e i moduli necessari di Angular
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FavoriteBtnComponent } from '../favorite-btn/favorite-btn.component'; // Importa un componente personalizzato
import { CommonModule } from '@angular/common'; // Importa il modulo Common di Angular
import { HttpClientModule } from '@angular/common/http'; // Importa il modulo HTTP client di Angular
import { Coffee } from '../../../types/coffee'; // Importa la definizione del tipo Coffee
import { CoffeeProviderService } from '../../../coffee-provider.service'; // Importa un servizio per gestire i dati del caffè

// Definisce i metadati del componente
@Component({
  selector: 'app-card', // Il tag HTML da utilizzare per questo componente
  standalone: true, // Indica che questo è un componente autonomo
  imports: [FavoriteBtnComponent, CommonModule, HttpClientModule], // Specifica i moduli e i componenti da importare
  providers: [CoffeeProviderService], // Specifica i servizi da fornire nell'ambito del componente
  templateUrl: './card.component.html', // Il file di template per l'HTML del componente
  styleUrl: './card.component.css', // Il file di stile per il CSS del componente
})
export class CardComponent {
  @Input() coffee: Coffee | undefined; // Proprietà di input per ricevere i dati del caffè da un componente padre

  // Decoratore ViewChild per iniettare un riferimento all'elemento del componente
  // Questo riferimento può essere utilizzato per manipolare direttamente l'elemento DOM
  @ViewChild('cardRef', { static: false }) cardRef: ElementRef | undefined;

  // Costruttore per iniettare il CoffeeProviderService per gestire i dati del caffè
  constructor(private coffeeProviderService: CoffeeProviderService) {}

  /**
   * Metodo per impostare lo stato di preferito del caffè
   *
   * @param {boolean} isFavorite - Indica se il caffè è segnato come preferito
   * @param {HTMLElement} cardRef - Riferimento all'elemento della carta per applicare la classe CSS
   *
   * @returns {void}
   */
  setFavorite(isFavorite: boolean, cardRef: HTMLElement) {
    if (this.coffee) {
      // Alterna la classe 'is-favorite' sull'elemento della carta in base al valore di isFavorite
      cardRef.classList.toggle('is-favorite', isFavorite);
      // Aggiorna lo stato di preferito dell'oggetto coffee
      this.coffee.isFavorite = isFavorite;
      // Chiama il metodo del servizio per aggiornare lo stato di preferito nel backend o nel data store
      this.coffeeProviderService.setFavorite(this.coffee.id, isFavorite);
    }
  }
}
