import { Component, inject } from '@angular/core';
import { UserTableComponent } from '../../components/user-table/user-table.component';
import { User } from '../../models/user.interface';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {

  dataService: DataService = inject(DataService);

  userList: User[] = [];
  filteredUsersList: User[] = [];



  /**
   * Busca os dados na API e salva em userList e filteredUsersList.
   */
  constructor()
  {
    this.dataService.getAllUsers().then((userDataList:User[]) => {
      this.userList = userDataList;
      this.filteredUsersList = userDataList;
    })

  }

  
  /**
   * [NÃO ESTÁ COMPLETO] Deleta um usário com base no parâmetro userId. 
   * @param userId - ID do usuário de interesse
   */
  deleteUser(userId: number) {
    let newUserList = this.userList.filter(userData => userData.id !== userId);

    console.log('a');

    this.filteredUsersList = newUserList;
    this.userList = newUserList;
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
