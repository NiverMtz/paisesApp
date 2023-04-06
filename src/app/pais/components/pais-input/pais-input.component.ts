import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = "";
  
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        console.log('debouncer: ', valor)
      })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( event: any ) {
    this.debouncer.next( this.termino );
  }

}
