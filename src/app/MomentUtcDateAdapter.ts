import { Injectable, Optional, Inject } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import * as moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@Injectable()
export class MomentUtcDateAdapter extends MomentDateAdapter {
  constructor(
    @Optional()
    @Inject(MAT_DATE_LOCALE)
    dateLocale: string
  ) {
    super(dateLocale);
  }
  createDate(year: number, month: number, date: number): Moment {
    let result = moment({
      year,
      month,
      day: date
    });

    // Account for timezone
    result = result.minutes(-new Date(year, month, date).getTimezoneOffset());

    return result;
  }
}
