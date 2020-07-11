import { Component, OnInit, HostListener, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width;
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
