import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from '../../domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room[]>;

  constructor(private roomService: RoomService) {
    this.rooms = roomService.getRooms();
  }

  ngOnInit() {
  }

}
