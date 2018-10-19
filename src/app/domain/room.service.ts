import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room } from './room.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { format} from 'date-fns';

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

  private ref(roomId: string): AngularFirestoreDocument<Room> {
    return this.afs.collection('rooms').doc(roomId);
  }

  private toId(name: string): string {
    const date = format(Date.now(), 'YYYY-MM-DD');
    return btoa(name.toLowerCase() + date);
  }
}
