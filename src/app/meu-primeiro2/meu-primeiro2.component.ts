import { MeuPrimeiro2Service } from './meu-primeiro2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro2',
  templateUrl: './meu-primeiro2.component.html',
  styleUrls: ['./meu-primeiro2.component.css']
})
export class MeuPrimeiro2Component {

  nomePortal: string;

  cursos: string[]

  constructor( public meuPrimeiro2Service: MeuPrimeiro2Service){
    this.nomePortal = 'hhtp://youtube.com.br';

    //for (let i=0; i<this.cursos.length; i++){
    //  let cursos = this.cursos[i];
    //}

    this.cursos = this.meuPrimeiro2Service.getCursos();

  var servico = new MeuPrimeiro2Service();

  }


}
