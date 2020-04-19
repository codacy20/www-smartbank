import { Injectable, EventEmitter } from '@angular/core';
import { Pages } from '../model/pages.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentPage: Pages = Pages.Login;

  constructor() {
  }

}
