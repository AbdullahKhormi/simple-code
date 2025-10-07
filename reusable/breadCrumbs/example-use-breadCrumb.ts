import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './user-list.component.html',})
export class UserListComponent {
  breadCrumb :any []=[]
constructor(){
      this.breadCrumb=[
    { label: 'Home', url: '/' },
    { label: 'example1' , url:'example' },
    { label: 'example1'  }
  ]
}
}
