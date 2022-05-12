import { Component, OnInit } from '@angular/core';
import { UserAPIService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isuserlogged:boolean=false;
  constructor(private userapiservise:UserAPIService) { }

  ngOnInit(): void {
    this.isuserlogged=this.userapiservise.isUserLogged
  }
  logout(){
    this.userapiservise.logout()
     }
}
