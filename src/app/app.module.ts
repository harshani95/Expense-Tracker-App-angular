import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { ShareModule } from './share/share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat"
import {AngularFireAuthModule} from "@angular/fire/compat/auth"
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
