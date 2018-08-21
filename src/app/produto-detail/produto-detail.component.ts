import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  produto = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProdutoDetails(this.route.snapshot.params['id']);
  }

  getProdutoDetails(id) {
    this.api.getProduto(id)
      .subscribe(data => {
        console.log(data);
        this.produto = data;
      });
  }

  deleteProduto(id) {
    this.api.deleteProduto(id)
      .subscribe(res => {
          this.router.navigate(['/produtos']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
