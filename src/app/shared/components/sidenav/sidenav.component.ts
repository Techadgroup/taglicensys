import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit {
  selectedNavItem: string = '';

  constructor(private router: Router) {}

  onNavItemClick(navItem: string) {
    this.selectedNavItem = navItem;
  }

  ngOnInit() {
    document.querySelectorAll('.nav-item > .nav-link').forEach((link) => {
      try {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const dropdown = this.nextElementSibling;
          const caret = this.querySelector('.caret');

          // Guard clauses to avoid errors if elements are missing

          if (!dropdown || !caret) return;

          if (dropdown.style.maxHeight) {
            dropdown.style.maxHeight = null;
            caret.classList.remove('rotate');
          } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
            caret.classList.add('rotate');
          }
        });
      } catch (error) {
        // console.log(error);
      }
    });
  }

  customeNav(rout) {
    // console.log(rout);
    this.router.navigateByUrl(rout);
  }
}
