import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() myEvent = new EventEmitter<string>();
  @Input() x: string;
  constructor() { }

  ngOnInit() {
  }

  onSearch(searchTerm) {
    this.myEvent.emit(searchTerm);
  }
}
