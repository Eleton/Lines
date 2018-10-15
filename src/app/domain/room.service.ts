import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Room } from './room.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private afs: AngularFirestore) { }

  getRooms(): Observable<Room[]> {
    return this.afs.collection<Room>('rooms').valueChanges();
  }

  createRoom(name, password): void {
    const date = new Date(Date.now());
    const newRoom: Room = {
      id: btoa(name + date.toLocaleDateString()),
      name,
      password,
      date
    };

    const doc = this.afs.collection('rooms', ref => ref.where('id', '==', newRoom.id));
    doc.get().toPromise()
      .then(d => {
        if (d.empty) {
          this.afs.collection('rooms').add(newRoom);
        }
      });
  }

  doesRoomExist(name): void {
    const date = new Date(Date.now());

    const doc = this.afs
      .collection('rooms',
        ref => ref.where('name', '==', name)
      )
      .valueChanges()
      .pipe(
        tap(val => console.log(val))
      );
  }
}
