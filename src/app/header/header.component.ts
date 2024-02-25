import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages } from './header-dummy-data';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  @Input() collapsed = false ;
  @Input() screenWidth = 0;

  canShowSearchAsOverLay = false;
  selectedLanguage: any;

  languages = languages;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
       this.checkCanShowSearchAsOverLay(window.innerWidth);
    }
  

  ngOnInit(): void{
    this.checkCanShowSearchAsOverLay(window.innerWidth);
  } 
  
  getHeadClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidth >768){
       styleClass = 'head-trimed';
    }else {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  } 

  checkCanShowSearchAsOverLay(innerWidth: number):void {
      if(innerWidth < 845) {
        this.canShowSearchAsOverLay = true;
      }else {
        this.canShowSearchAsOverLay = false;
      }
  }

}
