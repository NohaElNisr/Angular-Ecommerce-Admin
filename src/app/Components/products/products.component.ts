import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/ViewModels/store';
import { Output, EventEmitter } from '@angular/core';

import { Cart } from 'src/app/ViewModels/Icart';

import { Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteComponent } from '../delete/delete.component';
import { CategoryAPIService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {


  public displayedColumns = ['name', 'quantity','Purchasedate', 'Details','Edit','Delete'];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<IProduct>();  
  
  store: Store;
  //category: ICategory[];
  ClientName: string;
  // ProductList: IProduct[];
  IsPurshased: boolean = true;
  IsShow: boolean = false;
 
  plainCreditCard: string = '1234567891234567';
  idNumber: string = "";
  selectdate: Date = new Date();
  Purchasedate: Date = new Date();
  @Input() receivedSelectedCatID: number = 0;
  orderTotalPrice: number = 0;

  @Output() onToTalPriceChanged: EventEmitter<number>;
  @Output() OnAddToCart: EventEmitter<Cart>
  prdListofCat: IProduct[] = [];
 selectedcatID: number = 0;
 
  catList: ICategory[]=[];
  editlistproduct: IProduct[]=[];
  
  constructor(
    private router: Router,private prdAPIservices:ProductAPIService,private dialog: MatDialog,private catAPIservices:CategoryAPIService) {

    this.OnAddToCart = new EventEmitter<Cart>();
    this.onToTalPriceChanged = new EventEmitter<number>();
    this.ClientName = "";

    this.store = {
      Name: "Shopify store",
    
      Branches: ["Cairo", "Alex", "Aysut"]
    };

  }
  ngOnChanges(changes: SimpleChanges): void {

    this.prdAPIservices.getProductByCatID(this.receivedSelectedCatID).subscribe(prdlist=>{
      this.prdListofCat=prdlist;
    });

  }

  ngOnInit(): void
  
  {
    this.catAPIservices.getAllCategory().subscribe(catList=>{
      this.catList=catList;
    });
    this.prdAPIservices.getAllProducts().subscribe((prdlist)=>{
      this.prdListofCat=prdlist;
      this.dataSource.data= prdlist;

     
    });
  }
    
    delete(id:number){
      this.prdAPIservices.DeleteProduct(id).subscribe(data=>{
        {}
      })
    }

    
   
    openDialogdelete(data:IProduct) {

      const dialogConfig = new MatDialogConfig();  
        dialogConfig.disableClose = true;  
        dialogConfig.autoFocus = true;  
        dialogConfig.position = {  
            'top': '100px',  
            'left': '500px'  
        };  
        dialogConfig.width = '200px';  
        dialogConfig.height = '200px';  
        dialogConfig.data = {  
            id: data.id  
        };  
        this.dialog.open(DeleteComponent, dialogConfig);
  }
  
    openDialog(data:IProduct) {

      const dialogConfig = new MatDialogConfig();  
        dialogConfig.disableClose = true;  
        dialogConfig.autoFocus = true;  
        dialogConfig.position = {  
            'top': '100px',  
            'left': '500px'  
        };  
        dialogConfig.width = '500px';  
        dialogConfig.height = '500px';  
        dialogConfig.data = {  
            id: data.id  
        };  
        this.dialog.open(ProductDetailsComponent, dialogConfig);
  }
  openproductdetails(prdID: number) 
  {
    this.router.navigate(['/Products', prdID]);

  }
  public createImgPath = (serverPath: string) => { 
    return `http://localhost:34443/${serverPath}`; 
  }



  Buy() {
    this.IsPurshased = !this.IsPurshased;
    this.IsShow = !this.IsShow

  }

  
  Addtocart(prd: IProduct, Quanitynumber: number) {
    if (prd != null && prd.quantity >= Quanitynumber) {
      this.OnAddToCart.emit({
        productID: prd.id,
        productName: prd.name,
        UnitPrice: prd.price,
        Selectedquantity: Quanitynumber,
        TotalPrice: prd.price * prd.quantity,
        TaxValue: prd.price * (14 / 100)

      })
    }

  
  }
  //   edit(newPrd:IProduct,index:number){
// this.
//   }

}
