import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {Userdetail} from './userdetail.service';
import {FormsModule} from '@angular/forms';
import { FilterpipePipe } from './filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterpipePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [Userdetail],
  bootstrap: [AppComponent]
})
export class AppModule { }
