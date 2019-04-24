import { Component, OnInit } from '@angular/core';
import { RoomService, Room, Line } from 'src/app/domain';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-actor-lines',
  templateUrl: './actor-lines.component.html',
  styleUrls: ['./actor-lines.component.scss']
})
export class ActorLinesComponent implements OnInit {

  id: string;
  room$: Observable<Room>;
  lines$: Observable<Line[]>;
  loading: boolean;
  active: boolean;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.active = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.room$ = this.roomService.getRoomById(this.id);
    const savedData: Line[] | undefined = JSON.parse(sessionStorage.getItem('lines'));
    if (savedData) {
      this.loading = false;
      this.active = true;
      this.lines$ = of(savedData);
    } else {
    this.fetchLines();
    }
  }

  fetchLines() {
    const l$ = this.roomService.getThreeLines(this.id);
    const linesSub = l$.subscribe(lines => {
      this.loading = false;
      if (lines.length >= 3) {
        this.roomService.useLine(this.id, lines[0].id);
        this.roomService.useLine(this.id, lines[1].id);
        this.roomService.useLine(this.id, lines[2].id);

        sessionStorage.setItem('lines', JSON.stringify(lines))
        this.active = true;
        this.lines$ = of(lines);

        linesSub.unsubscribe();
      } else {
        this.active = false;
      }
    });
  }

}
