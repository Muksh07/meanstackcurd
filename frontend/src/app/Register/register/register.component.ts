import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit 
{
  name = '';
  email = '';
  password = '';
  gender = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(registerForm: any): void {
    if (registerForm.valid) {
      this.userService.register({ Name: this.name, Email: this.email, Password: this.password, Gender: this.gender }).subscribe(
        (response: any) => {
          registerForm.resetForm();
          this.router.navigate(['/']);
        },
        (error) => {
          this.errorMessage = 'Error registering user';
        }
      );
    }
  }

}
