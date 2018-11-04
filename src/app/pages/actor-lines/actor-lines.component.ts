import { Component, OnInit } from '@angular/core';
import { RoomService, Room, Line } from 'src/app/domain';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-lines',
  templateUrl: './actor-lines.component.html',
  styleUrls: ['./actor-lines.component.scss']
})
export class ActorLinesComponent implements OnInit {

  id: string;
  room$: Observable<Room>;
  lines$: Observable<Line[]>;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.room$ = this.roomService.getRoomById(this.id);
    this.lines$ = this.roomService.getThreeLines(this.id);
  }

}
