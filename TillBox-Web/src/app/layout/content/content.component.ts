import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html'
})
export class ContentComponent{
    title: string = "Content start from here";
}
