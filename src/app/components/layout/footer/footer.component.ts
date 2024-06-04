// Importa i componenti necessari di Angular
import { Component } from '@angular/core';
import { RandomQuotesService } from '../../../random-quotes.service'; // Importa un servizio personalizzato per ottenere citazioni casuali
import { CommonModule } from '@angular/common'; // Importa il modulo Common di Angular
import { HttpClientModule } from '@angular/common/http'; // Importa il modulo HTTP client di Angular

@Component({
  selector: 'app-footer', // Il tag HTML da utilizzare per questo componente
  standalone: true, // Indica che questo è un componente autonomo
  imports: [CommonModule, HttpClientModule], // Specifica i moduli da importare
  providers: [RandomQuotesService], // Specifica i servizi da fornire nell'ambito del componente
  templateUrl: './footer.component.html', // Il file di template per l'HTML del componente
  styleUrl: './footer.component.css', // Il file di stile per il CSS del componente
})
export class FooterComponent {
  footerQuote: string = ''; // Proprietà per memorizzare la citazione casuale da visualizzare nel footer
  footerTitle: string = 'Wait for your espresso to cool down before drinking it. Read a quote instead.'; // Titolo del footer

  // Costruttore per iniettare il servizio RandomQuotesService
  constructor(private randomQuotesService: RandomQuotesService) {
    // Chiama il servizio per ottenere una citazione casuale e aggiorna la proprietà footerQuote
    this.randomQuotesService.getRandomQuote().subscribe((quote: string) => {
      this.footerQuote = quote;
    });
  }
}
