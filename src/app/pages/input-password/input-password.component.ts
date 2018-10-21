import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  password = '';
  passwordArray = [];

  constructor() { }

  ngOnInit() {
    this.passwordConverter();
  }

  inputDigit(digit: string) {
    if (this.password.length < 4) {
      this.password = this.password + digit;
    }
    this.passwordConverter();
  }

  deleteDigit() {
    if (this.password.length > 0) {
      this.password = this.password.slice(0, this.password.length - 1);
    }
    this.passwordConverter();
  }

  private passwordConverter() {
    const passArr = this.password.split('');
    while (passArr.length < 4) {
      passArr.push('');
    }
    this.passwordArray = passArr;
  }

}
