import { Component, OnInit } from '@angular/core';
import { Parser, Expression } from 'expr-eval';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent{

  title = 'prog4_web';
  public expresion:string='';
  public result:string="0";

  resultado(){
    alert ('El resultado es:');
  }

  agregar(valor:string){
    if(this.result == '0')
    {
      this.result="";
    }
    this.result = this.result+valor;
  }

  borrar() {
    this.result = this.result.slice(0, -1);
    if(this.result.length == 0){
      this.result='0';
    }
  }

  limpiar(){
    this.result='0';
  }

  calcularExpresion() {
    let parser = new Parser();
    let expression = parser.parse(this.result);
    this.result = expression.evaluate({});
  }

}
