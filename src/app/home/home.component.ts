import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'learn-angular4';
  sign = "sign up";
  tryfree= "try free";
  signup() {
    this.sign = this.sign;
}
  tryitfree() {
    this.tryfree = this.tryfree;
  }
}
