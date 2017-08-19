import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent{
    title: string = "Content start from here";
}
