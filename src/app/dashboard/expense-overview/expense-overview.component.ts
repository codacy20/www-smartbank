import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.scss']
})
export class ExpenseOverviewComponent implements OnInit {

  public active = 0;
  constructor() { }

  ngOnInit(): void {
  }

  switchTabs(input: number) {
    if (input === 0)
      this.active = 0;
    else
      this.active = 1;
  }
}
