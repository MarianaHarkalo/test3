import { Component, OnInit, HostListener } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate:TranslateService) {
    translate.addLangs(['en','ua']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/)?browserLang:'en');
  }

  ngOnInit(): void {
  }
  
}
