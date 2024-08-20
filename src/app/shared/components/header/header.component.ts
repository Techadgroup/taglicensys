import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  elem = document.documentElement;
  fullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    }
  }
}
