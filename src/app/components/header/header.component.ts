import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() userData: any;
  navLinks = [
    { title: 'Videos' },
    { title: 'People' },
    { title: 'Documents' },
    { title: 'Events' },
    { title: 'Communities' },
    { title: 'Favourites' },
    { title: 'Channels' },
  ];
  showNav = false;
  navigation = (navTitle: string) => {
    alert(navTitle)
  }
  toggleNav = () => {
    this.showNav = !this.showNav;
  }

  ngOnInit() {}
}
