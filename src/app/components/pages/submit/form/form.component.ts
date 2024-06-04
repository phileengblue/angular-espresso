// Importa i componenti necessari di Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms'; // Importa i moduli e le classi necessarie per la gestione dei form reattivi
import { CoffeeOrigin } from '../../../../types/coffeeOrigin.enum'; // Importa un enum personalizzato per l'origine del caffè

@Component({
  selector: 'app-form', // Il tag HTML da utilizzare per questo componente
  standalone: true, // Indica che questo è un componente autonomo
  imports: [CommonModule, ReactiveFormsModule], // Specifica i moduli da importare
  providers: [FormBuilder], // Specifica i servizi da fornire nell'ambito del componente
  templateUrl: './form.component.html', // Il file di template per l'HTML del componente
  styleUrl: './form.component.css', // Il file di stile per il CSS del componente
})
export class FormComponent {
  coffeeForm: FormGroup; // Proprietà per memorizzare il form group del caffè
  coffeeOrigins = CoffeeOrigin; // Enum per le origini del caffè

  // Flag per controllare se il form è stato inviato
  // Utilizzato per mostrare un messaggio di successo e nascondere il form
  // TODO: Possiamo migliorare la riusabilità del componente e l'incapsulamento utilizzando i decoratori @Input() e @Output()
  // e emettere l'evento di invio al componente padre
  // A questo punto il componente padre deciderà se mostrare il messaggio di successo o meno
  isSubmitted = false;

  // Inietta il servizio FormBuilder per creare il form
  constructor(private formBuilder: FormBuilder) {
    // Crea il form group per il caffè con i relativi controlli e validatori
    this.coffeeForm = this.formBuilder.group({
      name: ['', Validators.required], // Campo nome con validatore required
      origin: ['', Validators.required], // Campo origine con validatore required
      description: [''], // Campo descrizione senza validatori
      price: ['', [Validators.required, Validators.min(0)]], // Campo prezzo con validatori required e min
    });
  }

  /**
   * Metodo chiamato al submit del form
   *
   * @returns {void}
   */
  onSubmit() {
    // Non è necessario passare un oggetto evento alla funzione, poiché il form è già legato al componente
    // e i valori del form sono disponibili nel componente

    // Imposta il flag a true per mostrare il messaggio di successo
    this.isSubmitted = true;
    console.log('Form submitted:', this.coffeeForm.value); // Stampa i valori del form inviato
    console.log('Is form valid?', this.coffeeForm.valid); // Stampa se il form è valido
  }
}
