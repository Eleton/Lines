import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/domain';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit {

  line = new FormControl('', Validators.required);

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  submitLine() {
    this.roomService.createLine(this.roomService.getCurrentRoomName(), this.line.value);
  }

}
