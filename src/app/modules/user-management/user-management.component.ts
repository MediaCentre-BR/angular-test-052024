import { Component, inject, OnInit } from '@angular/core';

import { User } from '../../models/user.interface';
import { ApiService } from '../../services/api/api.service';

import { UserTableComponent } from '../../components/user-table/user-table/user-table.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  userList: User[] = [];
  filteredUsersList: User[] = [];
  isReady:boolean = false;

  constructor(private apiService: ApiService){}

  /**
   * Pega os dados dos usuários da API no boot.
   */
  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (response) => {
        this.userList = response;
        this.filteredUsersList = response;
        this.isReady = true;
      }
    )
  };


  actionHandler(action: string)
  {
    alert(`Ação: ${action}`);
  }

  /**
   * Deleta um usário com base no parâmetro userId. 
   * 
   * NÃO DELETA O USUÁRIO NA API, APENAS LOCALMENTE.
   * @param userId - ID do usuário de interesse
   */
  deleteUser(userId: number): void
  {
    let newUserList = this.userList.filter(userData => userData.id !== userId);

    this.actionHandler(`Deletar Usuário (Id: ${userId})`)

    this.filteredUsersList = newUserList;
    this.userList = newUserList;
  }



  editUser(userId: number): void
  {
    this.actionHandler(`Editar Usuário (Id: ${userId})`);
  }


  /** 
   * Filtra os usuários por username de acordo com o parâmetro 
   * fornecido e salva o resultado em UserManagementComponent.filteredUsersList
   * 
   * É chamado a cada input do usuário.
   * 
   * @param text - Parâmetro de filtragem. 
  */
  onInputFilterResults(event: any): void 
  {
    let text:string = event.target.value;

    if (!text) {
      this.filteredUsersList = this.userList;
      return;
    }

    this.filteredUsersList = this.userList.filter(
      user => user?.username.toLowerCase().includes(text.toLowerCase())
    );
  }
}
