import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoCreateComponent } from './produtos-create/produtos-create.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'produtos',
    component: ProdutoComponent,
    data: { sku: 'Produto List' }
  },
  {
    path: 'produto-details/:id',
    component: ProdutoDetailComponent,
    data: { sku: 'Produto Details' }
  },
  {
    path: 'produtos-create',
    component: ProdutoCreateComponent,
    data: { sku: 'Create Produto' }
  },
  {
    path: 'produto-edit/:id',
    component: ProdutoEditComponent,
    data: { sku: 'Edit Produto' }
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoDetailComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
