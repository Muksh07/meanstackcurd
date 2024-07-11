import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-userlist',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit 
{
  users: any[] = [];
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void 
  {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getAllUsers(token).subscribe(
        (response: any) => {
          this.users = response;
        },
        (error) => {
          this.errorMessage = 'Failed to fetch users';
        }
      );
    } else {
      this.errorMessage = 'No token found, please login';
    }
  }

}
