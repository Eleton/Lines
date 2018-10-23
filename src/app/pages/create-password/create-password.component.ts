import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/domain';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  password = '';
  passwordArray = [];

  constructor(private roomService: RoomService) { }

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

  submitPassword() {
    this.roomService.createRoom(this.roomService.getCurrentRoomName(), this.password);
  }

  private passwordConverter() {
    const passArr = this.password.split('');
    while (passArr.length < 4) {
      passArr.push('');
    }
    this.passwordArray = passArr;
  }

}
