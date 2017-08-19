import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
    stringInterpolation: string = "This is string interpolation.";
    numberInterpolation: number = 2;

    onTest():boolean{
        return true;
    }
    onClicked(value:string){
        alert(value);
    }
}
