import { Component, OnInit } from '@angular/core';
import { RoomService, Line, Room } from 'src/app/domain';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-admin',
  templateUrl: './room-admin.component.html',
  styleUrls: ['./room-admin.component.scss']
})
export class RoomAdminComponent implements OnInit {
  roomId: string;
  lines$: Observable<Line[]>;
  currentRoom: Room;
  room$: Observable<Room>;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
    ) {

    this.roomService.getCurrentRoom$(this.roomService.getCurrentRoomName())
      .subscribe(room => this.currentRoom = room);

    this.roomService.getRoom(this.roomService.getCurrentRoomName());
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roomId = id;
    this.room$ = this.roomService.getRoomById(id);

    this.lines$ = this.roomService.getLines(id);
    // this.lines$.subscribe(x => console.log(x));
  }

  p() {
    // this.room$.subscribe(x => console.log(x));
  }

  toggleUse(lineId: string) {
    this.roomService.toggleUse(this.roomId, lineId);
  }

}
