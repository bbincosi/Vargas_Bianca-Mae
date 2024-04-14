import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {

  fieldText: string = "";
  operation: string = "";
  result: string = "";
  showMessage: boolean = false;


  constructor() { }

  clickBtn(value: number) {
    const newNumber: string = value.toString();
    this.handleClick(newNumber)
  }

  handleClick(number: string) {
    this.fieldText += number;
    this.result += number;
  }

  checkLetter() {
    const letterPattern = /[a-zA-Z]/;
    if ((this.fieldText.match(letterPattern)) && (this.result.match(letterPattern))) {
      this.showMessage = false;
    } else {
      this.showMessage = true;
    }
    this.fieldText = "";
    this.result = "";
  }

  clearBtn() {
    this.fieldText = "";
    this.operation = "";
    this.result = "";
  }
  
  operator(operator: string) {
    this.operation = operator;
    this.fieldText += this.operation.toString();
    this.result += this.operation.toString();;
  }

  equalBtn() {
    let newResult: string;
    if (this.fieldText && this.operation) {
      const parts = this.fieldText.split(/([\+\-\*\/])/);
        if (parts) {
            let result = parseInt(parts[0]);
            console.log(result)
            for (let i = 1; i < parts.length; i += 2) {
                const operator = parts[i];
                console.log(operator)
                const operand = parseInt(parts[i + 1]);
                console.log(operand)
                switch (operator) {
                    case '+':
                        result += operand;
                        console.log(result)
                        break;
                    case '-':
                        result -= operand;
                        console.log(result)
                        break;
                    case '*':
                        result *= operand;
                        console.log(result)
                        break;
                    case '/':
                        if (operand !== 0) {
                            result /= operand;
                            console.log(result)
                        } else {
                            newResult = 'Error: Division by zero';
                            this.result = newResult;
                            console.log(this.result);
                            return;
                        }
                        break;
                    default:
                      break;
                }
            }
            newResult = result.toString();
            this.result = newResult;
        }
    }
  }
}