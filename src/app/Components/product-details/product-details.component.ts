import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/product-api.service';

import { IProduct } from 'src/app/Models/iproduct';
import {MatDialog, MatDialogConfig,  MAT_DIALOG_DATA ,MatDialogRef } from "@angular/material/dialog";
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private currprdID: number = 0;
  private prdIDlist: number[] = [];
  
id:number=0;
name:string="";
price:number=0;
quantity:number=0;
img:string="";
  currprd: IProduct | undefined = undefined;
  Id: number=0;
  constructor(private activatedRoute: ActivatedRoute, private prdserviceAPI:ProductAPIService,
    private location: Location,private router:Router, private dialogRef: MatDialogRef < ProductsComponent > , @Inject(MAT_DIALOG_DATA) data:IProduct) {  
      this.currprdID = data.id  
  }  
    

  ngOnInit(): void {
    // this.currprdID = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    // this.prdserviceAPI.getProductByID(this.currprdID).subscribe(prd=>{
    //   this.currprd=prd;
    // });
    this.prdserviceAPI.getAllProducts(). subscribe(result => {  
      this.currprd = result.find(a => a.id == this.currprdID);  
      this.name = String(this.currprd?.name);
      this.price = Number(this.currprd?.price);
      this.quantity = Number(this.currprd?.quantity);
      this.img = String(this.currprd?.image);

      

  });
}
  close() {  
    this.dialogRef.close();  
}
  GoBack() {
    this.location.back();
  }

  public createImgPath = (serverPath: string|undefined) => { 
    return `http://localhost:34443/${serverPath}`; 
  }

  prevProduct()
  {
let currindex=this.prdIDlist.findIndex((val)=>val==this.currprdID);
if(currindex!=0)
{
  this.currprdID=this.prdIDlist[currindex-1];
  this.router.navigate(['/Products',this.currprdID])
}
  }
  nextProduct()
 {

  let currindex=this.prdIDlist.findIndex((val)=>val==this.currprdID);
  if(currindex<this.prdIDlist.length-1)
  {
    this.currprdID=this.prdIDlist[currindex+1];
    this.router.navigate(['/Products',this.currprdID])
  }

}
isFirstItem():boolean{
return this.currprdID==this.prdIDlist[0];
}
islastItem():boolean{
  return this.currprdID==this.prdIDlist[this.prdIDlist.length-1];
  }
}
