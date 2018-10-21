import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room, Line } from './room.model';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { format} from 'date-fns';

const lines: Line[] = [
  {
    id: '1',
    content: 'Hej du!',
    time: new Date(Date.now()),
    used: false,
    liked: false
  },
  {
    id: '2',
    content: 'Har du köpt dom där byxorna själv',
    time: new Date(Date.now()),
    used: true,
    liked: false
  },
  {
    id: '3',
    content: `Det här är en mening som innehåller 140 tecken
    , vilket jag tänker är en rimlig maxstorlek på en replik
    , på grund av Twitter liksom. Jarrrå.`,
    time: new Date(Date.now()),
    used: false,
    liked: false
  },
  {
    id: '4',
    content: 'Kort',
    time: new Date(Date.now()),
    used: false,
    liked: false
  },
  {
    id: '5',
    content: `Det här är en mening som innehåller 280 tecken
    , vilket jag tänker är en rimlig maxstorlek på en replik
    , på grund av Twitter liksom. Jarrrå.
    Det här är en mening som innehåller 280 tecken
    , vilket jag tänker är en rimlig maxstorlek på en replik
    , på grund av Twitter liksom. Jarrrå.`,
    time: new Date(Date.now()),
    used: false,
    liked: true
  },
  {
    id: '6',
    content: 'Ivan är så jävla bra på att skriva repliker till den här leken',
    time: new Date(Date.now()),
    used: true,
    liked: false
  },
  {
    id: '7',
    content: 'Fan vad Moa är en bra sångchef',
    time: new Date(Date.now()),
    used: false,
    liked: true
  },
];

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private afs: AngularFirestore) { }

  getRooms(): Observable<Room[]> {
    return this.afs.collection<Room>('rooms').valueChanges();
  }

  createRoom(name, password): Promise<Room> {
    const date = new Date(Date.now());
    const newRoom: Room = {
      id: this.toId(name),
      name,
      password,
      date
    };

    console.log(newRoom);

    return this.ref(newRoom.id).set(newRoom).then(() => newRoom);
  }

  doesRoomExist(name): Observable<boolean> {
    const date = format(Date.now(), 'YYYY-MM-DD');
    const id = this.toId(name);

    return this.ref(id).get().pipe(map(s => s.exists));
  }

  getLines(): Observable<Line[]> {
    return of(lines);
  }

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }

  private toId(name: string): string {
    const date = format(Date.now(), 'YYYY-MM-DD');
    return btoa(name.toLowerCase() + date);
  }
}
