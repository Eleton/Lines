import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/domain';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  password = '';
  passwordArray = [];

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

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
    this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'room_admin']);
  }

  private passwordConverter() {
    const passArr = this.password.split('');
    while (passArr.length < 4) {
      passArr.push('');
    }
    this.passwordArray = passArr;
  }

}
