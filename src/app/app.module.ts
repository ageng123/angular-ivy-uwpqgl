import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  HeaderComponent,
  ContentComponent,
  LeftSectionComponent,
  ActivityComponent,
  ChannelComponent,
} from './components';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    ContentComponent,
    LeftSectionComponent,
    ActivityComponent,
    ChannelComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
