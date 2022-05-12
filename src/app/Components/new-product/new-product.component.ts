import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryAPIService } from 'src/app/Services/category-api.service';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { Cart } from 'src/app/ViewModels/Icart';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  catList: ICategory[]=[];
  newPrd: IProduct={} as IProduct;
  ProUpdateId:number=0
  response: { dbPath:''}|any; 
  constructor( private prdAPIService: ProductAPIService
            , private router:Router,private catAPIservices:CategoryAPIService,private activatedRoute:ActivatedRoute) {
    // this.newPrd={
    //   id:60,
    //   Name:'Test Mobile From API',
    //   Price:150,
    //   Quantity:15,
    //   Img:'https://picsum.photos/id/237/150/100.jpg'
     
    // }
  }
  ngOnInit(): void {
    this.catAPIservices.getAllCategory().subscribe(catList=>{
      this.catList=catList;
    });
   
      this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
      if(this.ProUpdateId!=0)
      {
        this.prdAPIService.getProductByID(this.ProUpdateId).subscribe(prd=>{
          this.newPrd=prd;
        });
      }
      
    }
    uploadFinished = (event:any) => { 
      this.response = event; 
    }
  //with btn
//   saveproduct(){
//   this.prdAPIService.addNewProduct(this.newPrd).subscribe(prd=>{
// this.router.navigate(['/Products'])
//   })
//   }

 //with form
  // addnewProduct()
  // {
  //   this.prdAPIService.addNewProduct(this.newPrd).subscribe(prd=>{
  //     this.router.navigate(['/Products']);
  //   });
  // }
  saveProduct()
  {
    this.newPrd.image= this.response.dbPath;
    this.ProUpdateId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    if(this.ProUpdateId!=0)
    {
      this.prdAPIService.updatePro(this.newPrd,+this.ProUpdateId).subscribe(prd=>{
        this.router.navigate(['/Admin/Products']);
      });
    }
    else
    {
      this.prdAPIService.addNewProduct(this.newPrd).subscribe(prd=>{
        this.router.navigate(['/Admin/Products']);
      });
    }
    
  }
  
}
