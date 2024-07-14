import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  names=['sagar1','sagar2','sagar3'];

  customEventFunc(surname:string)
  {
    console.log(surname);
  }

}
