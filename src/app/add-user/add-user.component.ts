import { Component, OnInit } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  states = ['IL', 'NY', 'NJ', 'TN', 'FL', 'GA', 'VA'];
  user = {
    firstName: null,
    lastName: null,
    email: null,
    address: {
      state: null
    }
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.addUser(this.user)
      .subscribe((user) => {
        console.log(user);
        this.router.navigate(['../']);
      });
  }
}
