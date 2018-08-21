import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: any;
  displayedColumns = ['idcanal', 'sku', 'data'];
  dataSource = new ProdutoDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProdutos()
      .subscribe(res => {
        console.log(res);
        this.produtos = res;
      }, err => {
        console.log(err);
      });
  }
}

export class ProdutoDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getProdutos();
  }

  disconnect() {

  }
}
