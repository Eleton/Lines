import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from 'src/app/domain';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {

  password = '';
  passwordArray = [];
  wrongPassword = false;
  currentRoom: Room;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.passwordConverter();
    this.roomService.getCurrentRoom$(this.roomService.getCurrentRoomName())
      .subscribe(room => { this.currentRoom = room; console.log(this.currentRoom) });
  }

  inputDigit(digit: string) {
    this.wrongPassword = false;
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
    if (this.currentRoom.password === this.password) {
      this.roomService.createRoom(this.roomService.getCurrentRoomName(), this.password);
      this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'actor_lines']);
    } else {
      this.password = '';
      this.passwordArray = ['', '', '', ''];
      this.wrongPassword = true;
    }
  }

  private passwordConverter() {
    const passArr = this.password.split('');
    while (passArr.length < 4) {
      passArr.push('');
    }
    this.passwordArray = passArr;
  }

}
