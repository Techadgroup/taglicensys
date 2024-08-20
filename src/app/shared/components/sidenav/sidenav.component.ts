import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  selectedNavItem: string = '';

  onNavItemClick(navItem: string) {
    this.selectedNavItem = navItem;
  }

  ngOnInit() {

    document.querySelectorAll('.nav-item > .nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const dropdown = this.nextElementSibling;
          const caret = this.querySelector('.caret');
          if (dropdown.style.maxHeight) {
              dropdown.style.maxHeight = null;
              caret.classList.remove('rotate');
          } else {
              dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
              caret.classList.add('rotate');
          }
      });
  });
      
  }
}
