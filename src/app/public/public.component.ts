import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router  } from '@angular/router';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;

  constructor(public router:Router,) {
 
    let data:any = window.performance.getEntriesByType("navigation")[0];

if(data.type == 'reload'){
  sessionStorage.clear()
}
this.router.events
.pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
.subscribe(event => {
  if (
    event.id === 1 &&
    event.url === event.urlAfterRedirects
  ) {
    sessionStorage.clear()
  }else{
    
  }
})
   }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }

}