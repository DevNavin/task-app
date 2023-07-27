import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserSessionService } from '../user-session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null,
bio:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoading:boolean=false;

  constructor( private apiService: ApiService,private userSessionService: UserSessionService,private _snackBar: MatSnackBar) { }
  hide = true;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading=true;

    this.apiService.sendApi(this.form).subscribe(response => {
if(response.body['success']==true){
  this.userSessionService.setSessionAndLogin('true');
  this._snackBar.open('Registration successful', 'success',{
    duration: 2000
  });
  this.isLoading=false;

}else{
  sessionStorage.clear();
}
      })
 
  }
}
