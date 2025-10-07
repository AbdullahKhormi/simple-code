import { Component } from '@angular/core';
import { TabsComponent } from "../tabs/tabs.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './user-list.component.html',})
export class UserListComponent {
tabs = ['tab1','tab2']
activatedTabs :number= 0

changeTab(index :any){
  console.log(index)
this.activatedTabs = index
}
}
