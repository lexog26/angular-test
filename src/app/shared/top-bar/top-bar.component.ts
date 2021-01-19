import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter();
  toggleValue = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleForMenuClick(): void {
    this.menuClick.emit(this.toggleValue);
    this.toggleValue = !this.toggleValue;
   }

}
