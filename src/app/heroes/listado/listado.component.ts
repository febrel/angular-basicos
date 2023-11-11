import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Black Panther 2'];
  heroeBorrado:string = '';

  borrarHeroe():void{
    console.log('Borrando Héroe...');

    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }

}
