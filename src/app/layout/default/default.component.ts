import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  ngOnInit() {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  onActivate(event: any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
      
 }
}
