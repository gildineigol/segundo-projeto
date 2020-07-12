import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular', 'HTML']

  constructor(){
    this.nomePortal = 'hhtp://youtube.com.br';

    for (let i=0; i<this.cursos.length; i++){
      let cursos = this.cursos[i];
    }

  }


}
