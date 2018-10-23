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
    this.roomService.getCurrentRoom().subscribe(room => {
      this.roomService.createLine(room.id, this.line.value);
    }).unsubscribe();
  }

}
