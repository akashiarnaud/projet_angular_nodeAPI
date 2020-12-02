import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../shared/rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public api: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  login(){
      let u = (<HTMLInputElement>document.getElementById("username")).value;
      let p = (<HTMLInputElement>document.getElementById("password")).value;
      const user = {username : u,password :p};
      //alert(user.username + " "+ p);
      this.api.auth(user).subscribe((data: {}) => {
        try{
          this.router.navigate(['/login'])
        }
        catch(err){
          this.router.navigate(['/acceuil']);
        }

       })


  }
}
