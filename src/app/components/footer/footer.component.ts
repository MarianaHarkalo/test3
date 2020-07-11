import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
