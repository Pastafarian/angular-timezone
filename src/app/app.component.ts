import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datetime';
  formGroup: FormGroup;
  fb: FormBuilder;
  startDate = new Date(1971, 7, 9);

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      datePicker: []
    });
  }

  go() {
    console.log('here ' + new Date(1970, 7, 9));
    console.log(this.formGroup.value);
    console.log(this.formGroup.value.datePicker);
    console.log(new Date(this.formGroup.value.datePicker));
  }
}
