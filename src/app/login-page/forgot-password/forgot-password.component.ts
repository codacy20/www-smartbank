import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pages } from 'src/app/model/pages.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @Output() eventSwtichComponent: EventEmitter<Pages> = new EventEmitter<Pages>();
  public active = 0;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  switchTabs() {
    if (this.active === 0)
      this.active = 1;
    else
      this.active = 0;
  }

  toggleSubComponents() {
    this.eventSwtichComponent.emit(Pages.Login);
  }
}
