import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-form-new-transaction',
  templateUrl: 'app-form-new-transaction.component.html',
  styleUrls: ['app-form-new-transaction.component.scss'],
})
export class AppFormNewTransaction {
  @Output() theHandleTransaction = new EventEmitter();

  title = 'Form New transaction';
  destino = 0;
  valor = 0;

  // setValor(valor: number): void {
  //   this.valor = valor;
  // }
  // getValor(): number {
  //   return this.valor;
  // }

  // setDestino(destino: number): void {
  //   this.destino = destino;
  // }
  // getDestino(): number {
  //   return this.destino;
  // }

  handleNewTransaction() {
    const transaction = { valor: this.valor, destino: this.destino };
    this.theHandleTransaction.emit(JSON.stringify(transaction));
    console.log(JSON.stringify(transaction))
  }
}
