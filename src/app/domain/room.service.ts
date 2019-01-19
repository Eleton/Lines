import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room, Line } from './room.model';
import { Observable, of, ObservableInput, merge, from } from 'rxjs';
import { tap, map, switchMap, mergeMap } from 'rxjs/operators';
import { format} from 'date-fns';

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

    this.ref(roomId).collection('lines').doc(line.id).set(line);
  }

  getLines(id): Observable<Line[]> {
    return this.ref(id).collection<Line>('lines').valueChanges();
  }

  getThreeLines(id: string): Observable<Line[]> {
    console.log("ge mig tre repliker")
    const l = this.ref(id).collection<Line>('lines').snapshotChanges()
    const lines$ = l.pipe(
      tap(lines => console.log(lines)),
      map(lines => lines.map(line => line.payload.doc.data())),
      map(lines => {
        return lines
          .map(line => ({line, random: Math.random()}))
          .sort((a, b) => a.random - b.random)
          .map(line => line.line)
          .slice(0, 3);
      }),
      tap(lines => {
        console.log(lines)
      })
    )
    const lol = lines$.subscribe(lines => {
      console.log({lines})
      this.useLine(id, lines[0].id)
      this.useLine(id, lines[1].id)
      this.useLine(id, lines[2].id)
      lol.unsubscribe()
    })
    return lines$;
  }

  toggleUse(id: string, lineId: string) {
    console.log("halllåååå????")
    const line = this.ref(id).collection<Line>('lines').doc(lineId)
    line.get().toPromise()
      .then(l => {
        const { used } = l.data();
        line.update({used: !used})
      })
  }

  useLine(id: string, lineId: string) {
    console.log("nu använder jag ", lineId)
    const line = this.ref(id).collection<Line>('lines').doc(lineId)
    line.get().toPromise()
      .then(l => {
        const { used } = l.data();
        line.update({used: true})
      })
  }

  toId(name: string): string {
    const date = format(Date.now(), 'YYYY-MM-DD');
    return btoa(name.toLowerCase() + date);
  }

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }

}
