import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { UploadComponent } from './Components/upload/upload.component';
import { AdminAuthGuard } from './Gaurd/admin-auth.guard';

const routes: Routes = [
  
  {path:'',component:MainLayoutComponent,children:[
   {path:'',redirectTo:'/Home',pathMatch:'full'},
     { path:'Home',component:HomeComponent},
     { path:'Aboutme',component:AboutMeComponent},
    


   ]},
  { path:'register',component:RegisterComponent},
  { path:'register/:uid',component:RegisterComponent},

  { path:'login',component:LoginComponent},
  { path:'logout',component:LoginComponent},
  {
    path: 'Admin', 
    loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule),
  canActivate:[AdminAuthGuard]
},
  { path:'**',component:NotFoundComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
