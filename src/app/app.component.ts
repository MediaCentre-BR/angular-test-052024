import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data/data.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { HttpClient } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ButtonComponent,
    UserManagementComponent,
    MatSlideToggleModule,



  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent implements OnInit {


  title = 'angular-test-052024';
  searchTerm: string = '';
  result: string | null = null;
  expandedUsers: { [key: number]: boolean } = {};


  //Botão Pesquisar

  onSearch(): void {
    alert(`Em desenvolvimento!`);
  }
  //Botão Editar
  handleButtonEdit(action: string, user: any) {
    alert(`Ação ${action} realizada para o usuário ${user.name}. Em desenvolvimento!`);
  }

  //Botão Deletar
  handleButtonDelete(action: string, user: User): void {
    if (action === 'Excluir') {
      if (confirm(`Tem certeza que deseja excluir o usuário ${user.name}?`)) {
        this.deleteUser(user.id);
      }
    } else if (action === 'Editar') {
      alert(`Ação ${action} realizada para o usuário ${user.name}. Em desenvolvimento!`);
    }
  }

  deleteUser(userId: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(
      () => {
        alert('Usuário excluído com sucesso.');
        // Exclui o usuário localmente da lista
        this.users = this.users.filter(user => user.id !== userId);
      },
      (error: any) => {
        console.error('Erro ao excluir usuário:', error);
        alert('Erro ao excluir usuário. Por favor, tente novamente mais tarde.');
        // Lógica adicional de tratamento de erro, se necessário.
      }
    );
  }



  toggleDetails(userId: number): void {
    this.expandedUsers[userId] = !this.expandedUsers[userId];
  }

  users: User[] = [];

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
bootstrapApplication(AppComponent, {
  providers: [DataService]
});
