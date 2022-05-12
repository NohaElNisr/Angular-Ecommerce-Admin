import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  private currprdID: number = 0;
  id:number=0;
  currprd: IProduct | undefined = undefined;
  constructor(private activatedRoute: ActivatedRoute, private prdserviceAPI:ProductAPIService,
   private router:Router, private dialogRef: MatDialogRef < ProductsComponent > , @Inject(MAT_DIALOG_DATA) data:IProduct) {  
      this.currprdID = data.id    }
  ngOnInit(): void {
    // this.currprdID = Number(this.activatedRoute.snapshot.paramMap.get("pid"));
   
  //  this.prdserviceAPI.getAllProducts(). subscribe(result => {  
  //   this.currprd = result.find(a => a.id == this.currprdID);  
  //   this.prdserviceAPI.DeleteProduct(this.currprdID).subscribe(data=>{});

    // this.EmailId = this.UserDetail.EmailId;  
    // this.Gender = this.UserDetail.Gender;  
    // this.Address = this.UserDetail.Address;  
    // this.MobileNo = this.UserDetail.MobileNo;  
    // this.PinCode = this.UserDetail.PinCode; 

// });
 
}
  

  close(){
    this.prdserviceAPI.getAllProducts(). subscribe(result => {  
      this.currprd = result.find(a => a.id == this.currprdID);  
      this.prdserviceAPI.DeleteProduct(this.currprdID).subscribe(data=>{});
   this.dialogRef.close();  
    
  });

  }
  cancel(){
    this.dialogRef.close();  
  }
}
