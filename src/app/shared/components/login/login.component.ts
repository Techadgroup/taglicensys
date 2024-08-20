import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  msg = '';

  ngOnInit() {
    
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  loginUser() {
    
  }

}

