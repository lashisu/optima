import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav, MatSidenavModule } from "@angular/material";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor() { }

  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.navMode = 'over';
      setTimeout(() => {
        this.sidenav.close();
      }, 100);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 960) {
      this.navMode = 'over';
      this.sidenav.close();
    }
    if (event.target.innerWidth > 960) {
      this.sidenav.close();
      this.navMode = 'side';
      setTimeout(() => {
        this.sidenav.open();
      }, 500);
    }
  }

}
