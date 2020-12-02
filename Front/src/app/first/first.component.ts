import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {RestApiService} from "../shared/rest-api.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  Classes : any = [];
  Personnages : any = [];
  Pu : any = [];
  @ViewChild('idP', { static: true }) idP: ElementRef;
  constructor(
    public api : RestApiService
  ) { }

  ngOnInit() {
    this.test3();
  }
  test(){
    var test = ((document.getElementById("test") as HTMLInputElement).value);
    alert(test);
  }
  test3(){
    return this.api.getPersonnage(1).subscribe((data : {}) => {
      this.Pu = data;
    })
  }
  update_router(){

  }
  delete(){
    var id = ((document.getElementById("idP") as HTMLInputElement).value);
    alert(id);
    //this.api.deletePersonnage(id);
    if (window.confirm('Are you sure, you want to delete?')){
      this.api.deletePersonnage(id).subscribe(data => {
        this.test3();
      })
    }
  }
}

