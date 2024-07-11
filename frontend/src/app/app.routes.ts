import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { UserlistComponent } from './UserList/userlist/userlist.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'sign-up', component: RegisterComponent},
    {path: 'alluser', component: UserlistComponent}
];
