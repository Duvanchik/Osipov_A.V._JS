import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent-block',
  templateUrl: './parent-block.component.html',
  styleUrls: ['./parent-block.component.scss']
})
export class ParentBlockComponent implements OnInit {
  
  constructor() { }  
  parent_text = "text from parent!";
  message = "default message";

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
  
  ngOnInit(): void {
  }

}
