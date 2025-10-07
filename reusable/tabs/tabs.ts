import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
@Input({required:true}) tabsArray :any []=[]
@Output () changeTabs = new EventEmitter
activeTabs :number =0


active(index:number){
  this.activeTabs=index
this.changeTabs.emit(this.activeTabs)

}
}
