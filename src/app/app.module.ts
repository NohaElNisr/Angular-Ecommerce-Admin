import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CustompipePipe } from './Pipes/Creditcardpipe.pipe';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { IDNumberPipe } from './Pipes/idnumber.pipe';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { UserAPIService } from './Services/user-api.service';
import { TokenInterceeptorService } from './Services/token-interceeptor.service';
import { UploadComponent } from './Components/upload/upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { UploadComponent } from './upload/upload.component';
import { AppMaterialModule } from "./app.material-module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSidenavModule} from "@angular/material/sidenav";
import{MatToolbarModule} from "@angular/material/toolbar"
import{MatIconModule} from"@angular/material/icon"
import{  MatDividerModule} from "@angular/material/divider"
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    ProductCardDirective,
    CustompipePipe,
    ShoppingCartComponent,
    IDNumberPipe,
    AboutMeComponent,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NewProductComponent,
    DeleteComponent,
    UploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
   
    AppMaterialModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceeptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
