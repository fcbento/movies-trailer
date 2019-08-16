import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
 
  @ViewChild('sideBar') sideBar: ElementRef;
  @ViewChild('closeSideBar') closeSideBar: ElementRef;
  @ViewChild('displayMenu') displayMenu: ElementRef;
  
  constructor() { }

  ngOnInit() {

  }
  
  openSideBar(){
    window.innerWidth == 360 
      ? this.sideBar.nativeElement.style.width = "150px"
      : this.sideBar.nativeElement.style.width = "220px"
  }

  close() {
    this.sideBar.nativeElement.style.width = "0";
  }

}