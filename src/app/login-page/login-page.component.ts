import { Component, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { Pages } from 'src/app/model/pages.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public showLogin: Pages = Pages.Login;

  constructor(private loginService: LoginService) {
  }

  swtich($event: Pages) {
    this.showLogin = $event;
  }
}
