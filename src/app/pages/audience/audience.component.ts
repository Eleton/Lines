import { Component, OnInit } from '@angular/core';
import { RoomService, Room } from 'src/app/domain';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit {

  line = new FormControl('', Validators.required);
  room$: Observable<Room>;
  id: string;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.room$ = this.roomService.getRoomById(this.id);
  }

  submitLine() {
    this.roomService.createLine(this.id, this.line.value);
  }

}
