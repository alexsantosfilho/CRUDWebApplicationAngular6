import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;
  idcanal = '';
  sku = '';
  quantidade = '';
  data = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      'idcanal' : [null, Validators.required],
      'sku' : [null, Validators.required],
      'quantidade' : [null, Validators.required],
      'data' : [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
