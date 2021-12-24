import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-block',
  templateUrl: './child-block.component.html',
  styleUrls: ['./child-block.component.scss']
})
export class ChildBlockComponent implements OnInit {

  constructor() { }

  @Input() child_text = 'text from Child!';

  @Output() newMessageEvent = new EventEmitter<string>();

  addNewMessage(message:string) {
    this.newMessageEvent.emit(message);
  }

  ngOnInit(): void {
  }

}
