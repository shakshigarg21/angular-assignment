import { Component, OnInit} from '@angular/core';
import { User } from '../model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      name: 'Amar',
      username: 'amar12',
      email: 'amar12@gamil.com',
    },
    {
      name: 'kartik',
      username: 'kartik14garg',
      email: 'kgarg14@gmail.com',
    },
    {
      name: 'Sonu',
      username: 'Sonugupta08',
      email: 'sgupta08@gmail.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

 handleDeleteUser(index : number) {
   console.log(index)
    this.users.splice(index, 1);
  } 

}
