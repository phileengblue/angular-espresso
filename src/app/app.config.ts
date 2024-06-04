// Importa le classi necessarie di Angular
import { ApplicationConfig } from '@angular/core'; // Importa ApplicationConfig per configurare l'applicazione Angular
import { provideRouter } from '@angular/router'; // Importa provideRouter per fornire la configurazione del router
import { routes } from './app.routes'; // Importa le rotte definite nell'applicazione

// Esporta una configurazione dell'applicazione come costante
export const appConfig: ApplicationConfig = {
  // Fornisce la configurazione del router utilizzando le rotte definite
  providers: [provideRouter(routes)],
};
