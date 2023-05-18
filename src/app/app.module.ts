import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorComponent } from './creator/creator.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { GreetingCreatorService } from './greeting-creator.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorComponent,
    SearchDeleteComponent,
    ItemComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GreetingCreatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
