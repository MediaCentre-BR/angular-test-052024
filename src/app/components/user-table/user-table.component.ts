import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  @Input() userList!: User[];
  @Output() callDeleteUserData = new EventEmitter<number>();
  
  selectedIndex: number = -1;

  /** 
   * Chama a função de deleteUser em UserManagement. 
   * 
   * É chamado ao clicar no ícone de lixeira. 
  */
  callDeleteUser(userId: number): void {

    this.callDeleteUserData.emit(userId);
  }

  /** 
   * Torna visivel ou invisivel o compartimento abaixo do row.
   * 
   * É chamado ao clicar em "See More..." dentro de um row.
  */
  toggleDetails(userId:number): void
  {
    if (this.selectedIndex == userId) {
      this.selectedIndex = -1;
      return;
    }
    this.selectedIndex = userId;
  }

  
}
