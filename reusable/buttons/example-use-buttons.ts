import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Buttons } from '../../../../../shared/components/buttons/buttons';

@Component({
  selector: 'app-example-button',
  imports: [Buttons],
  templateUrl: './example-button.html',
  styleUrl: './example-button.scss'
})
export class ExampleButton {
buttonStyles = {
  color: 'yellow',
  backgroundColor: 'red',
  fontSize: '18px',
  padding: '12px 24px'
};
event(){
  alert("Yoy can add event here")
}
}
