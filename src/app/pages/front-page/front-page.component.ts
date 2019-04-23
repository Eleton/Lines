import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Room, RoomService, forbiddenNameValidator } from '../../domain';
import { Router } from '@angular/router';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  pending = '';
  inputText = '';
  creatorOfRoom = true;
  roomName = new FormControl(
    this.roomService.getCurrentRoomName(),
    Validators.required,
    forbiddenNameValidator(this.roomService)
  );

  constructor(
    private roomService: RoomService,
    private router: Router,
  ) { }

  ngOnInit() {
    sessionStorage.removeItem('lines');
    this.roomName.statusChanges.subscribe(status => {
      this.pending = status;
    });
    this.roomName.valueChanges.subscribe(inputText => {
      this.inputText = inputText;
    });
    if (this.roomName.value) {
      this.pending = 'INVALID';
      this.inputText = this.roomName.value;
      this.setRoomName();
    }
  }

  setRoomName() {
    this.roomService.setCurrentRoomName(this.roomName.value);

    const ownedRooms = JSON.parse(sessionStorage.getItem('ownedRooms'));
    if (Array.isArray(ownedRooms)) {
      this.creatorOfRoom = ownedRooms.includes(this.roomService.toId(this.roomName.value))
    } else {
      this.creatorOfRoom = false;
    }
  }


  goToRoomAdmin() {
    if (this.creatorOfRoom) {
      this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'room_admin']);
    } else {
      this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'password']);
    }
  }
  goToActor() {
    this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'actor_password']);
  }
  goToAudience() {
    this.router.navigate([this.roomService.toId(this.roomService.getCurrentRoomName()), 'audience']);
  }

}
