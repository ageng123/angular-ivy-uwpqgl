import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {}
  videos = {
    name: 'Videos',
  };
  document = {
    name: 'Documents',
  };
  people = {
    name: 'People',
  };
  ngOnInit() {}
}
