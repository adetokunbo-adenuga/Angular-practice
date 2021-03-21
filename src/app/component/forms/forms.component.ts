import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
