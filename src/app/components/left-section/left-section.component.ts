import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css'],
})
export class LeftSectionComponent implements OnInit {
  constructor() {}
  content = [
    {
      title: 'Videos 1',
      subtitle: 'Sub Video 1',
      image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
    },
    {
      title: 'Videos 2',
      subtitle: 'Sub Video 2',
      image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
    },
    {
      title: 'Videos 3',
      subtitle: 'Sub Video 3',
      image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
    },
    {
      title: 'Videos 4',
      subtitle: 'Sub Video 4',
      image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
    },
    {
      title: 'Videos 5',
      subtitle: 'Sub Video 5',
      image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
    },
  ];
  @Input() module: any;

  ngOnInit() {
    this.content = this.module.child ? this.module.child : [];
  }
}
