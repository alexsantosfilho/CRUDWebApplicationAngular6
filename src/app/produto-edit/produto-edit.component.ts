import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './porduto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produtoForm: FormGroup;
  id = '';
  idcanal = '';
  sku = '';
  quantidade = '';
  data = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id']);
    this.produtoForm = this.formBuilder.group({
      'idcanal' : [null, Validators.required],
      'sku' : [null, Validators.required],
      'quantidade' : [null, Validators.required],
      'data' : [null, Validators.required],
    });
  }

  getProduto(id) {
    this.api.getProduto(id).subscribe(data => {
      this.id = data._id;
      this.produtoForm.setValue({
        idcanal: data.idcanal,
        sku: data.sku,
        quantidade: data.quantidade,
        data: data.data,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateProduto(this.id, form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/produto-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  produtoDetails() {
    this.router.navigate(['/produto-details', this.id]);
  }
}
