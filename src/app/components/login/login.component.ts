import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'tricky-disco';
  constructor(public authservice: AuthService, public router:Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {}

  login(): void {
    console.log("login");
    this.authservice.testL().subscribe(any => {
      console.log("any: " + any);
    });

  }

  redirect(): void {
    this.router.navigate(["success"]);
  }
}

/*
  this.router.navigate(["success", this.betalningsforelaggande.id]);
*/