import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Room, RoomService, forbiddenNameValidator } from '../../domain';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  form = this.fb.group({
    roomName: [
      '',
      [Validators.minLength(6), Validators.required],
      forbiddenNameValidator(this.roomService)
    ],
    password: ['', Validators.required]
  });

  constructor(
    private roomService: RoomService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  submitRoom() {
    this.roomService.createRoom(this.form.get('roomName').value, this.form.get('password').value);
  }

  onSubmit() {
    this.roomService.doesRoomExist(this.form.get('roomName').value);
  }

}
