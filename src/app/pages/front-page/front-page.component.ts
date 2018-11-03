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
    this.roomName.statusChanges.subscribe(status => {
      this.pending = status;
    });
    this.roomName.valueChanges.subscribe(inputText => {
      this.inputText = inputText;
    });
  }

  submitRoom() {
    // this.roomService.createRoom(this.roomName.value, '5555');
    // this.roomService.setCurrentRoomName(this.roomName.value);
  }

  setRoomName() {
    this.roomService.setCurrentRoomName(this.roomName.value);
  }

  goToAudience() {
    // this.roomService.setCurrentRoom(this.roomService.getRoom(this.roomName.value));
    // this.router.navigateByUrl('/audience');
  }

}
