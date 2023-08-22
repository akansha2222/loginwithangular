import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient,private router: Router){
    if(localStorage.getItem('username')){
      this.router.navigate(['dashboard']);
    }
  }
  ngOnInit() { }
  
  onSubmit(event:any) {
    var data = {
      "username":event.target.username.value,
      "password":event.target.password.value,
      "appname":"GeoAd",
      "portalName":"geoad"
    }
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set("Accept", "*/*"); 
    localStorage.setItem('username',event.target.username.value);
    
    this.router.navigate(['dashboard']);
    this.http.post('http://54.225.122.8:7000/bh/login/v1/',data,{headers: headers}).subscribe((e)=>{
      
    })
    
  }
}
