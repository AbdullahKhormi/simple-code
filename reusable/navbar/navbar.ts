import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
     @Input({ required: true }) items: any[] = [];
  activeItem = 0;


  active(index: number) {
    this.activeItem = index;
  }


  }
