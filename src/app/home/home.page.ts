import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cigarrosPorDia: number;
  anosFumando: number;
  diasPerdidos: number = 0;

  constructor() {}

  calcular(){
    let cigarrosPorAno = this.cigarrosPorDia * 365;
    let totalCigarros = cigarrosPorAno * this.anosFumando;
    let minutosPerdidos = totalCigarros * 10;
    let horasPerdidas = minutosPerdidos / 60;
    this.diasPerdidos = horasPerdidas / 24;
  }
}
