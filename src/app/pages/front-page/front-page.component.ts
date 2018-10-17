import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Room, RoomService, forbiddenNameValidator } from '../../domain';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  roomName = new FormControl('', Validators.required, forbiddenNameValidator());

  constructor(
    private roomService: RoomService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
