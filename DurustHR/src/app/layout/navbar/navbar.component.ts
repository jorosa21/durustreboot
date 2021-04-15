import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout(e) {
    e.preventDefault();
    
    sessionStorage.removeItem('token');

    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['login']);
    }
  }

  toggleSidebar(e){
    
  }

}
