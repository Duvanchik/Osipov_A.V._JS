import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  @Input() allUsers:any;

  constructor() { }

  deleteUser(){
    this.allUsers.pop()
  }

  ngOnInit(): void {
  }

}
