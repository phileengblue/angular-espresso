// Importa i componenti necessari di Angular
import { Component } from '@angular/core';
import { InfoService } from '../../../info.service'; // Importa un servizio personalizzato
import { RouterLink } from '@angular/router'; // Importa RouterLink per la navigazione

@Component({
  selector: 'app-header', // Il tag HTML da utilizzare per questo componente
  standalone: true, // Indica che questo è un componente autonomo
  imports: [RouterLink], // Specifica i moduli e i componenti da importare
  templateUrl: './header.component.html', // Il file di template per l'HTML del componente
  providers: [InfoService], // Specifica i servizi da fornire nell'ambito del componente
  styleUrl: './header.component.css', // Il file di stile per il CSS del componente
})
export class HeaderComponent {
  _appName: string; // Proprietà privata per memorizzare il nome dell'applicazione
  get appName(): string { // Getter per la proprietà _appName
    return this._appName;
  }

  _appVersion: string; // Proprietà privata per memorizzare la versione dell'applicazione
  get appVersion(): string { // Getter per la proprietà _appVersion
    return this._appVersion;
  }

  // Costruttore per iniettare il servizio InfoService
  constructor(private infoService: InfoService) {
    // Inizializza _appName con il valore ottenuto dal servizio
    this._appName = this.infoService.getAppName();
    // Inizializza _appVersion con il valore ottenuto dal servizio
    this._appVersion = this.infoService.getAppVersion();
  }
}
