import { Component, OnInit } from '@angular/core';
import { UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public active = true;
  current: string;

  constructor(private router: Router) {
    this.current = location.href.substring(location.href.lastIndexOf('/') + 1);
  }

  ngOnInit() {
  }

  navigate(input: number) {
    switch (input) {
      case 0:
        this.router.navigateByUrl('/dashboard');
        break;
      case 1:
        this.router.navigateByUrl('/payments');
        break;
      case 2:
        this.router.navigateByUrl('/offers');
        break;
      case 3:
        this.router.navigateByUrl('/chat');
        break;
      case 4:
        this.router.navigateByUrl('/map');
        break;
      case 5:
        this.router.navigateByUrl('/setting');
        break;
      case 6:
        this.router.navigateByUrl('/login');
        break;
    }
  }

}
