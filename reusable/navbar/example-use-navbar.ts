import { Component } from '@angular/core';
import { NavBar } from '../../../../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-example-use-navbar',
  imports: [NavBar],
  templateUrl: './example-use-navbar.html',
  styleUrl: './example-use-navbar.scss'
})
export class ExampleUseNavbar {
items:any[]=[]


constructor(){

  this.items=[
    {label:"tabs", url:""},
    {label:"breadcrumb", url:""},
    {label:"buttons", url:""},
    {label:"toast", url:""},
    {label:"navbar", url:""},

  ]
}
}
