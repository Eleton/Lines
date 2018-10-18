import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Room, RoomService, forbiddenNameValidator } from '../../domain';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  pending = '';
  roomName = new FormControl('', Validators.required, forbiddenNameValidator(this.roomService));

  constructor(
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.roomName.statusChanges.subscribe(status => {
      console.log(status);
      this.pending = status;
    });
  }

}
