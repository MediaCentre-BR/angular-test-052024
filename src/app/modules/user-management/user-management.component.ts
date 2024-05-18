import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserTableComponent } from '../../components/table-user-data/user-table/user-table.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

}
