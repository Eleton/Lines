import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CreateRoomComponent } from './pages/create-room/create-room.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CreatePasswordComponent } from './pages/create-password/create-password.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin', component: LoginPageComponent },
  { path: 'password', component: CreatePasswordComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    CreateRoomComponent,
    RoomListComponent,
    FrontPageComponent,
    HeaderComponent,
    FooterComponent,
    CreatePasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
