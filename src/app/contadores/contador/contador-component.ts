import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1 class="titulo">{{ title }} </h1>

        <div class="container">
        <div class="box-1">
            <h3>La base es: <strong>{{ base }}</strong></h3>
            <button (click)="acumular(base); "> + {{ base }} </button>
            <span>{{ numero }}</span>
            <button (click)="acumular(- base); "> - {{ base }} </button>
        </div>
        </div>
    `
})
export class ContadorComponent {
    title = 'Contador App';
    numero: number = 10;
    base: number = 5;

    // Funciones
    acumular(valor: number) {
        this.numero += valor;
    }
}