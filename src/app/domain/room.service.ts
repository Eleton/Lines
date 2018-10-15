import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room } from './room.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

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
      id: btoa(name + date.toLocaleDateString()),
      name,
      password,
      date
    };

    console.log(newRoom);


    // const ref = this.afs.collection('rooms').doc(newRoom.id);

    return this.ref(newRoom.id).set(newRoom).then(() => newRoom);
  }

  doesRoomExist(name): Observable<boolean> {
    const date = new Date(Date.now());
    const id = btoa(name + date.toLocaleDateString());

    return this.ref(id).get().pipe(map(s => s.exists));
  }

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }
}
