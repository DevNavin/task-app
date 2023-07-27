import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  isLoading=true;
  tokens;
  constructor(private _snackBar: MatSnackBar,) {
    // this._snackBar.open('message', 'success');
    let data=sessionStorage.getItem('token')
    if(data == null || data==undefined){
      this.tokens=true;
    }else{
      this.tokens=false;
    }
   }

  ngOnInit(): void {
  
  }
}
