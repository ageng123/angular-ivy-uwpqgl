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
    more_title: 'Upload Videos',
    browse_other_text: 'Browse All Videos',
    child: [
      {
        title: 'Videos 1',
        subtitle: 'Sub Video 1',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''
      },
      {
        title: 'Videos 2',
        subtitle: 'Sub Video 2',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Videos 3',
        subtitle: 'Sub Video 3',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Videos 4',
        subtitle: 'Sub Video 4',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Videos 5',
        subtitle: 'Sub Video 5',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
    ]
  };
  document = {
    name: 'Documents',
    more_title: 'Share Your Document',
    browse_other_text: 'Browse All Documents',
    child: [
      {
        title: 'Documents 1',
        subtitle: 'Sub Video 1',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Documents 2',
        subtitle: 'Sub Video 2',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Documents 3',
        subtitle: 'Sub Video 3',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Documents 4',
        subtitle: 'Sub Video 4',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'Documents 5',
        subtitle: 'Sub Video 5',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
    ]

  };
  people = {
    name: 'People',
    more_title: 'Show Your Work',
    browse_other_text: 'View All',
    child: [
      {
        title: 'People 1',
        subtitle: 'User Interface Designer',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'People 2',
        subtitle: 'Sub Video 2',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'People 3',
        subtitle: 'Sub Video 3',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'People 4',
        subtitle: 'Sub Video 4',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
      {
        title: 'People 5',
        subtitle: 'Sub Video 5',
        image: 'https://subiakto.com/wp-content/uploads/2015/12/Google.jpg',
        views: ''

      },
    ]

  };
  formatRandomViews = () => {
    let angka = (Math.floor(Math.random()*(1 * 1000 * 1000 * 1000)) + (1 * 1000)) + '';
    let prefix = undefined;
    let separator = '.';
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
   
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
   
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? rupiah : '0');
  }
  ngOnInit() {
    for(let child in this.document.child){
      let data = this.document.child[child];
      data.views = this.formatRandomViews() + ' views';
      this.document.child[child].views = data.views;
      if(parseInt(child) > 0){
        this.document.child[child].subtitle = data.views;
        this.document.child[child].views = '';

      }
    }
    for(let child in this.people.child){
      let data = this.people.child[child];
      data.views = this.formatRandomViews() + ' views';
      this.people.child[child].views = data.views;
      console.log('before:' + child + '.',this.people.child[child]);

      if(parseInt(child) > 0){
        this.people.child[child].subtitle = data.title;
        this.people.child[child].title = '';
        this.people.child[child].views = '';
      }
      console.log('after:' + child + '.',this.people.child[child]);
      console.log(data);
    }
    for(let child in this.videos.child){
      let data = this.videos.child[child];
      data.views = this.formatRandomViews() + ' views';
      this.videos.child[child].views = data.views;
      if(parseInt(child) > 0){
        this.videos.child[child].title = '';
      }
    }
  }
}
