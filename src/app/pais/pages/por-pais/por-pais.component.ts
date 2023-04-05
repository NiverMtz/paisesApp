import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { of } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string="";
  hayError: boolean=false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino)

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        console.log(paises)
        this.paises = paises
        this.hayError = paises.length < 0
      }, (err) => {
        this.hayError = true;
        this.paises = []
      })

    // of(this.paisService.buscarPais(this.termino))
    // .subscribe({
    //   next: paises => console.log(paises),
    //   error: err => {
    //     this.hayError = true
    //     console.log(err)
    //   }
    // })
  }
}
