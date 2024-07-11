import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  email = '';
  password = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(loginForm: any): void 
  {
    if (loginForm.valid) {
      this.userService.login({ Email: this.email, Password: this.password }).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/alluser']);
        },
        (error) => {
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/sign-up']);
  }

}
