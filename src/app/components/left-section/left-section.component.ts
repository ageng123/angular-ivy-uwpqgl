import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css'],
})
export class LeftSectionComponent implements OnInit {
  constructor() {}
  content = [
    
  ];
  @Input() module: any;

  ngOnInit() {
    this.content = this.module.child ? this.module.child : [];
  }
}
