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
    {label:"tabs", url:"tabs/example-tabs"},
    {label:"breadcrumb", url:"breadcrumb/example-breadcrumb"},
    {label:"buttons", url:"buttons/example-buttons"},
    {label:"toast", url:"toast/example-toast"},
    {label:"navbar", url:"navbar/example-navbar"},

  ]
}
}
