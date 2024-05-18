import { Routes } from '@angular/router';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { ButtonComponent } from './components/button/button.component';
export const routes: Routes = [
    {
        path: 'user-management',
        component: UserManagementComponent,
        title: 'User Management'
      },

      {
        path: 'button',
        component: ButtonComponent,
        title: 'Button Add'
      },
];
