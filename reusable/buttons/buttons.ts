import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [NgStyle],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss'
})
export class Buttons {
@Input({required:true}) label :string =''
@Input({required:true}) disabled :boolean =false
@Input () styles:any={  color: 'yellow',backgroundColor: 'green', fontSize: '18px', padding: '12px 24px'}
@Input() icon :string=''
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
