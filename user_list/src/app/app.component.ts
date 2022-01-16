import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userList = [
    {
      firstName: "Ivan",
      lastName: "Stepanovich",
      age: "45"
    },
    {
      firstName: "Stepan",
      lastName: "Ivanovich",
      age: "48"
    },
    {
      firstName: "Foma",
      lastName: "Fomich",
      age: "52"
    },
    {
      firstName: "Ivan",
      lastName: "Kuzmich",
      age: "41"
    },
  ];
  
}
