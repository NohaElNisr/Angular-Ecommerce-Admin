import { Component, OnInit } from '@angular/core';
import { UserAPIService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  

  
  isuserlogged:boolean=false;
  constructor(private userapiservise:UserAPIService) { }

  ngOnInit(): void {
    this.isuserlogged=this.userapiservise.isUserLogged
  }
  logout(){
    this.userapiservise.logout()
     }
  opened:boolean=false
}
