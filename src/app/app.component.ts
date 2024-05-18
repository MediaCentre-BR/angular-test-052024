import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DataService } from './services/data/data.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { ButtonComponent } from './components/button/button.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';

interface User {
  id: number;
  name: string;
  email: string;
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
    UserManagementComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'angular-test-052024';
  searchTerm: string = '';
  result: string | null = null;

  onSearch(): void {
    alert(`Em desenvolvimento!`);
  }

  handleButtonClick(action: string, user: any) {
    alert(`Ação ${action} realizada para o usuário ${user.name}. Em desenvolvimento!`);
  }

  users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
  
}

bootstrapApplication(AppComponent, {
  providers: [DataService] 
});
