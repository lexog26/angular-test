import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students-spa';
  @ViewChild('sidenav') sidenav: any;

  toggleSidenav(evt: boolean): void {
    evt ? this.sidenav.open() : this.sidenav.close();
  }
}
