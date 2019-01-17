import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room, Line } from './room.model';
import { Observable, of, ObservableInput, merge } from 'rxjs';
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

  // getThreeLines(id: string): Observable<Line[]> {
  //   const lines$ = this.ref(id).collection<Line>('lines').get().pipe(
  //     map(snapshot => snapshot.docs),
  //     map(lines => {
  //       return lines
  //         .map(line => ({line, randomNumber: Math.random()}))
  //         .sort((a, b) => a.randomNumber - b.randomNumber)
  //         .map(line => line.line)
  //         .slice(0, 3);
  //     }),
  //     mergeMap()
  //     switchMap(lines => {
  //       return lines.forEach(line => this.ref(id).collection<Line>('lines').doc(line.id).update({used: true})
  //     })
  //   );
  //   // lines$.pipe(
  //   //   tap(lines =>
  //   //     lines.forEach(line => {
  //   //       this.ref(id).collection<Line>('lines').doc(line.id).update({used: true});
  //   //     })
  //   //   )
  //   // );
  //   return lines$;
  // }

  toId(name: string): string {
    const date = format(Date.now(), 'YYYY-MM-DD');
    return btoa(name.toLowerCase() + date);
  }

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }

}
