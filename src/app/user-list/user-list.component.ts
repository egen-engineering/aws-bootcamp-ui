import { Component, OnInit } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { remove } from "lodash";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe(() => {
        remove(this.users, function (user) {
          return user.id === userId;
        });
      });
  }
}
