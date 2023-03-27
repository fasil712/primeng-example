import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./appdemo.scss'],
})
export class AppComponent {
  // date: Date;
  form: FormGroup;
  constructor() {}
  ngOnInit() {
    this.form = new FormGroup({
      date: new FormControl<Date | null>(null),
    });
  }
}
