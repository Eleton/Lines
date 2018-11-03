import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room, Line } from './room.model';
import { Observable, of, ObservableInput } from 'rxjs';
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

  currentRoomName = '';
  currentRoom$: Observable<Room>;
  currentRoom: Room;

  constructor(private afs: AngularFirestore) {
  }

  setCurrentRoomName(roomName: string) {
    this.currentRoomName = roomName;
  }

  getCurrentRoomName(): string {
    return this.currentRoomName;
  }

  setCurrentRoom(room: Observable<Room>) {
    this.currentRoom$ = room;
  }

  getCurrentRoom(): Room {
    return this.currentRoom;
  }

  getCurrentRoom$(name: string): Observable<Room> {
    return this.ref(this.toId(name)).valueChanges();
  }

  getRoomById(id: string): Observable<Room> {
    return this.ref(id).valueChanges();
  }

  getRoom(name: string) {
    const id = this.toId(name);
    this.ref(id).valueChanges().subscribe(room => {
      this.currentRoom = room;
    }).unsubscribe();
  }

  getRooms(): Observable<Room[]> {
    return this.afs.collection<Room>('rooms').valueChanges();
  }

  createRoom(name, password) {
    const date = new Date(Date.now());
    const newRoom: Room = {
      id: this.toId(name),
      name,
      password,
      date
    };

    return this.ref(newRoom.id).set(newRoom).then(() => newRoom);
  }

  doesRoomExist(name): Observable<boolean> {
    const id = this.toId(name);

    return this.ref(id).get().pipe(map(s => s.exists));
  }

  createLine(roomId: string, content: string) {
    const time = Date.now();
    const line: Line = {
      id: time.toString(),
      content: content,
      time: new Date(time),
      used: false,
      liked: false
    };

    this.ref(this.toId(roomId)).collection('lines').doc(line.id).set(line);
  }

  getLines(id): Observable<Line[]> {
    return this.ref(id).collection<Line>('lines').valueChanges();
    return of(lines);
  }

  toId(name: string): string {
    const date = format(Date.now(), 'YYYY-MM-DD');
    return btoa(name.toLowerCase() + date);
  }

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }

}
