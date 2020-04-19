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

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  toggleSubComponents() {
    this.eventSwtichComponent.emit(Pages.Login);
  }
}
