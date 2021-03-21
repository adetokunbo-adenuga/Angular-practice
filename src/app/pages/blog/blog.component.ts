import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
      transition('* => void', [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class BlogComponent implements OnInit {
  @Input() form: FormGroup;
  /* An empty array that is responsible
       to add a division */
  public items = [];

  /* A two-way binding performed which
          pushes text on division */
  public newTask: string;

  /* When input is empty, it will
          not create a new division */
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the
          task, that has to be deleted*/
  public deleteTask(index) {
    this.items.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
