import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./appdemo.scss'],
})
export class AppComponent {
  countries: any[];
  selectedCity: any;
  form: FormGroup;
  comments: any[];
  mode: string;
  constructor(private services: CustomerService) {}
  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl<number | null>(null),
      fullname: new FormControl<string | null>(null),
      age: new FormControl<number | null>(null),
      date: new FormControl<Date | null>(null),
      selectedCity: new FormControl<object | null>(null),
    });

    this.services.getCountries().subscribe((res) => {
      this.countries = res;
    });
    this.getComments();
  }
  getComments() {
    this.services.getComments().subscribe((res) => {
      this.comments = res;
    });
  }

  saveData() {
    if (this.form.invalid) {
      return;
    } else if (this.mode == 'add') {
      this.addComment();
    } else {
      this.updateComment(this.form.value);
    }
  }

  addComment() {
    this.mode = 'add';
    this.services.addComments(this.form.value).subscribe((res) => {
      console.log(res);
      this.getComments();
    });
  }

  updateComment(comment: any) {
    this.mode = 'update';
    this.services
      .updateComments(comment.id, this.form.value)
      .subscribe((res) => {
        console.log(res);
        this.getComments();
      });
  }
  deleteComment(id: number) {
    this.services.deletComments(id).subscribe((res) => {
      this.getComments();
    });
  }
  reset() {
    this.form.reset();
  }
}
