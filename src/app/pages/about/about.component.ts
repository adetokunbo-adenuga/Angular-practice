import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  imageObject: Array<object> = [{
    video: 'https://www.youtube.com/watch?v=CW97gJWPLqo', // Youtube url
    title: '@thad.deus at work in Stockholm'
},
{
  video: 'https://www.youtube.com/watch?v=82iR0sabs-Q',
  title: 'Football diaries'
},
{
  video: 'https://www.youtube.com/watch?v=6j5q-hP8sfk',
  title: 'CSS lightbox tutorial'
},
{
  video: 'https://www.youtube.com/watch?v=Bcr70LIJcOk',
  title: 'Advanced CSS'
}
,
{
  video: 'https://www.youtube.com/watch?v=k5E2AVpwsko&t=2089s',
  title: 'Angular crash course'
}
,
{
  video: 'https://www.youtube.com/watch?v=5wtnKulcquA',
  title: 'Angular course'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
