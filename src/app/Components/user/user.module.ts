import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './UserProfile/UserProfile.component';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { NewProductComponent } from '../new-product/new-product.component';
import { DeleteComponent } from '../delete/delete.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { HomeComponent } from '../home/home.component';



const routes:Routes=[
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'Admin/Profile',pathMatch:'full'},
    { path:'Home',component:HomeComponent},
  // {path:'',redirectTo:'/Admin/Profile',pathMatch:'full'},

  {path:'Profile',component:UserProfileComponent},
  // {path:'Profile',component:UserProfileComponent},
  { path:'Products',component:ProductsComponent},
  { path:'Products/:pid',component:ProductDetailsComponent},
  { path:'newproduct',component:NewProductComponent},
  { path:'EditProduct/:pid',component:NewProductComponent},
  { path:'DeleteProduct/:pid',component:DeleteComponent},

]}]

@NgModule({
  declarations: [ 
    UserProfileComponent ,
    
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  
  ]
})
export class UserModule { }

