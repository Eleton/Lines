import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Room, RoomService, forbiddenNameValidator } from '../../domain';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  form = this.fb.group({
    roomName: [
      'hejsan',
      [Validators.minLength(4),
      // forbiddenNameValidator(this.roomService)
    ]
    ],
    password: ['']
  });
  roomName = new FormControl('hejsan', [
    Validators.minLength(4),
    forbiddenNameValidator(this.roomService)
  ]);
  password = new FormControl('');

  constructor(
    private afs: AngularFirestore,
    private roomService: RoomService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  submitRoom() {
    this.roomService.createRoom(this.roomName.value, this.password.value);
  }

  onSubmit() {
    console.log(this.form);
    this.roomService.doesRoomExist('hejsan');
  }

}
