import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuPrimeiro2Service {

  constructor() { }

  getCursos(){
return['Java', 'Ext JS', 'Angular', 'HTML'];

  }
}
