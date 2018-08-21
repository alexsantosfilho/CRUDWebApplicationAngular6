import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  id = '';
  idcanal = '';
  sku = '';
  quantidade = '';
  author = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.bookForm = this.formBuilder.group({
      'idcanal' : [null, Validators.required],
      'sku' : [null, Validators.required],
      'quantidade' : [null, Validators.required],
      'author' : [null, Validators.required],
    });
  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      this.id = data._id;
      this.bookForm.setValue({
        idcanal: data.idcanal,
        sku: data.sku,
        quantidade: data.quantidade,
        author: data.author,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateBook(this.id, form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  bookDetails() {
    this.router.navigate(['/book-details', this.id]);
  }
}
