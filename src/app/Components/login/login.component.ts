import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAPIService } from 'src/app/Services/user-api.service';
import { IUser } from 'src/app/ViewModels/iuser';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userloginFormGroup: FormGroup;
  isuserlogged:boolean=false;
  newuser: User={} as User;
  constructor(private fb:FormBuilder, private usrApiService: UserAPIService
    , private router:Router) {


    this.userloginFormGroup = fb.group({
  
      userName: ['',[Validators.required,Validators.minLength(4)]],
    
     
      password:['',Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ],
      

      


    });




  }

  ngOnInit(): void {
    this.isuserlogged=this.usrApiService.loggedIn()
  }
 
  get userName() {
    return this.userloginFormGroup.controls['userName'];
  }
  
  get password() {
    return this.userloginFormGroup.controls['password'];
  }
  
 

  

  
  Login()
  {
    this.usrApiService.login(this.userloginFormGroup.value).subscribe
    (
      res=>{console.log(res)
     localStorage.getItem('token')
  
      this.router.navigate(['/Admin/Products'])
    
  },
  
    )
}
logout(){
  this.usrApiService.logout()
   }

//   newusre: User={} as User;
// isuserlogged:boolean=false;
//   constructor(private userApiservices:UserAPIService) { }

//   ngOnInit(): void 
//   {
//     this.isuserlogged=this.userApiservices.isUserLogged
//   }
//   login(){
   
//     console.log(this.newusre)
//       //  this.userApiservices.login(this.newusre)
    
//   }
 

 
  }