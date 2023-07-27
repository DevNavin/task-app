import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserSessionService } from '../user-session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
isLoading:boolean=false;
tokens=false;
  constructor( private apiService: ApiService,private userSessionService: UserSessionService,private _snackBar: MatSnackBar) { 
    let data=sessionStorage.getItem('token')
    if(data == null || data==undefined){
      this.tokens=true;
    }else{
      this.tokens=false;
    }
    this.isLoading=true;
    this.apiService.getDetails().subscribe(response => {
      this.currentUser=response.body;
    this.isLoading=false;

            })
   }

  ngOnInit(): void {
    // this.currentUser = this.token.getUser();
  }
}
