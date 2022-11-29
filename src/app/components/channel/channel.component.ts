import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  constructor() {}
  channels = [];
  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      this.channels[i] = 0;
    }
  }
}
