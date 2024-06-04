// Importa i componenti necessari di Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/common/card/card.component'; // Importa un componente personalizzato CardComponent
import { CoffeeProviderService } from '../../coffee-provider.service'; // Importa un servizio personalizzato per gestire i dati del caffè
import { HttpClientModule } from '@angular/common/http'; // Importa il modulo HTTP client di Angular
import { Coffee } from '../../types/coffee'; // Importa la definizione del tipo Coffee

@Component({
  selector: 'app-home', // Il tag HTML da utilizzare per questo componente
  standalone: true, // Indica che questo è un componente autonomo
  imports: [CommonModule, CardComponent, HttpClientModule], // Specifica i moduli e i componenti da importare
  providers: [CoffeeProviderService], // Specifica i servizi da fornire nell'ambito del componente
  templateUrl: './home.component.html', // Il file di template per l'HTML del componente
  styleUrl: './home.component.css', // Il file di stile per il CSS del componente
})
export class HomeComponent implements OnInit {
  coffees: Coffee[] = []; // Proprietà per memorizzare l'elenco dei caffè

  // Costruttore per iniettare il servizio CoffeeProviderService
  constructor(private coffeeProviderService: CoffeeProviderService) {}

  // Metodo lifecycle di Angular che viene chiamato una volta che l'istanza del componente è stata creata
  ngOnInit() {
    // Chiama il servizio per ottenere tutti i caffè e aggiorna la proprietà coffees
    this.coffeeProviderService
      .getAllCoffees()
      .subscribe((coffees: Coffee[]) => {
        this.coffees = coffees;
      });
  }
}
