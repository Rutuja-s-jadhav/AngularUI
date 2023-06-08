import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Honeywell';
  Isloggedin:boolean=true;

  logout() {
    localStorage.clear();
    this.Isloggedin = false;
    console.log(this.Isloggedin);
  }
}
