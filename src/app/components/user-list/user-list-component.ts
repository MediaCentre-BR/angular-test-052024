import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

interface User {
  id: number;
  name: string; 
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
