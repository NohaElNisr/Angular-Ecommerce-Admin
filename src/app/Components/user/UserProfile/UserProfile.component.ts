import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAPIService } from 'src/app/Services/user-api.service';
import { IUser } from 'src/app/ViewModels/iuser';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-UserProfile',
  templateUrl: './UserProfile.component.html',
  styleUrls: ['./UserProfile.component.scss']
})
export class UserProfileComponent implements OnInit {
  
  ;

  userlist: User[] = [];
  editlistproduct: User[]=[];
  userid:number=0;
  constructor( private activatedRoute: ActivatedRoute, private router: Router,private userapIservices:UserAPIService) { }

  ngOnInit(): void
  
  {
 
    this.userapIservices.getAlluser().subscribe(prdlist=>{
      this.userlist=prdlist;

     
    });
  // this.userid=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
  // if(this.userid!=0){
  //   this.userapIservices.getuserByID(this.userid).subscribe(usr=>this.)
  }
  
  

    // delete(id:number){
    //   this.userapIservices.DeleteProduct(id).subscribe(data=>{
    //     {}
    //   })
    // }
 

}
