import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private afs: AngularFirestore) {
    const test = afs.collection('rooms').doc('iy9V4SqdEsjp5jV5ucm4').collection('lines');
    const lol = test.valueChanges();
    lol.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

}
