import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practive-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {
  displayDetails = false;
  clickLog = [];
  spw = 'THisSecree2';

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.displayDetails = !this.displayDetails;
    this.clickLog.unshift(new Date());
  }

}
