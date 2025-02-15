import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookingConstant } from '../../core/constants/bookingConstant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  menus : any[] = [];
  role : string = '';
  filteredMenu : any[] = [];

  constructor() {
    this.menus = BookingConstant.menus;
    const userData = localStorage.getItem('LocalUserData');

    if(userData != null){
      const parseObj = JSON.parse(userData);
      this.role = parseObj.role;
    }

    this.menus.forEach((element) => {
      const isRolePresent = element.roles.find((role : any) => role == this.role);
      if(isRolePresent != undefined){
        this.filteredMenu.push(element);
      }
    });


  }
}
