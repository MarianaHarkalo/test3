import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  width:number;
  bool:boolean;
  constructor() {
    this.getScreenSize();
   }

  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.width = window.outerWidth;
        if(this.width>=374&&this.width<=378){
          this.bool=true;
        }
        else{
          this.bool=false;
        }
  }
}
