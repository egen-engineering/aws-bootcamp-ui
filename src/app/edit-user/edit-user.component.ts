import { Component, OnInit } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  states = ['IL', 'NY', 'NJ', 'TN', 'FL', 'GA', 'VA'];
  user: any = {
    firstName: null,
    lastName: null,
    email: null,
    address: {
      state: null
    }
  };

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userService.getUserById(params.id)
        .subscribe(user => {
          this.user = user;
        });
    });
  }

  editUser() {
    this.userService.editUser(this.user.id, this.user)
      .subscribe((user) => {
        console.log(user);
        this.router.navigate(['../']);
      });
  }
}
