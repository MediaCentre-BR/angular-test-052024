import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/user.interface';

import { TableDetailsComponent } from '../table-details/table-details.component';

import { growInOut } from '../../../../animations/growInOutFromTop.animation';
import { growFromBehind } from '../../../../animations/growFromBehind.animation';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, TableDetailsComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
  animations: [growInOut, growFromBehind]
})
export class UserTableComponent {

  @Input() userList!: User[];
  @Input() isReady!: boolean;
  @Output() callDeleteUserData = new EventEmitter<number>();
  @Output() callEditUserData = new EventEmitter<number>()
  
  selectedIndex: number = -1;

  /** 
   * Chama a função de deleteUser em UserManagement. 
   * 
   * É chamado ao clicar no ícone de lixeira. 
   * 
   * @param userId - Id do Usuário
  */
  callDeleteUser(userId: number): void {

    this.callDeleteUserData.emit(userId);
  }

  /**
   * Chama a função de editUser em UserManagement. 
   * 
   * É chamado ao clicar no ícone de lapis.
   * 
   * @param userId - Id do Usuário
   */
  callEditUser(userId:number): void {
    this.callEditUserData.emit(userId);
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
