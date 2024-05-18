import { Routes } from '@angular/router';
import { UserManagementComponent } from './modules/user-management/user-management.component';
export const routes: Routes = [
    {
        path: 'user-management',
        component: UserManagementComponent,
        title: 'User Management'
      },      
];
