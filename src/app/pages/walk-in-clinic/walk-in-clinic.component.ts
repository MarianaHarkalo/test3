import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-in-clinic',
  templateUrl: './walk-in-clinic.component.html',
  styleUrls: ['./walk-in-clinic.component.scss']
})
export class WalkInClinicComponent implements OnInit {
  menu_info_value:string="transparent"
  public activeItem: string='Transparent Pricingi';
  constructor() { }

  ngOnInit(): void {
  }
  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
  
}
