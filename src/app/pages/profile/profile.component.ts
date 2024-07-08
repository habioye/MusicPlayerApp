// src/app/pages/profile/profile.component.ts
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  constructor(authService: AuthService) {
    authService.userProfile$.subscribe(profile => {
      this.userProfile = profile;
    });
  }

  ngOnInit() {}
}
