import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-el-of-llist',
  templateUrl: './el-of-llist.component.html',
  styleUrls: ['./el-of-llist.component.scss']
})
export class ElOfLlistComponent implements OnInit {
  @Input() user: any;
  @Input() id!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
