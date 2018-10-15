import { TestBed, async } from '@angular/core/testing';

import { RoomService } from './room.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    });
    service = TestBed.get(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('room should exist', (done) => {
    service.doesRoomExist('test').toPromise().then(value => {
      expect(value).toBe(true);
      done();
    });
  });

  it('room should NOT exist', (done) => {
    service.doesRoomExist('test2').toPromise().then(value => {
      console.log(value);

      expect(value).toBe(false);
      done();
    });
  });
});
