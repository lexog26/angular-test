import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;

  ngOnInit(): void {
  }

  open(): void{
    this.sidenav.open();
  }

  close(): void{
    this.sidenav.close();
  }
}
