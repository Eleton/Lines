import { Component, OnInit } from '@angular/core';
import { RoomService, Line } from 'src/app/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-admin',
  templateUrl: './room-admin.component.html',
  styleUrls: ['./room-admin.component.scss']
})
export class RoomAdminComponent implements OnInit {

  lines$: Observable<Line[]>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.lines$ = this.roomService.getLines();
  }

}
