import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../login.service';
import { Pages } from '../../model/pages.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name = 'Amir';
  @Output() eventSwtichComponent: EventEmitter<Pages> = new EventEmitter<Pages>();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  toggleSubComponents() {
    this.eventSwtichComponent.emit(Pages.ForgotPassword);
  }
}
