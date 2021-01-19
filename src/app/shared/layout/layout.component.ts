import { SideNavComponent } from './../side-nav/side-nav.component';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;

  ngOnInit(): void {
  }

  toggleSidenav(evt: boolean): void {
    evt ? this.sidenav.open() : this.sidenav.close();
    }

}
