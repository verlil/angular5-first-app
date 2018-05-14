import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-final',
  templateUrl: './basics-final.component.html',
  styleUrls: ['./basics-final.component.css']
})
export class BasicsFinalComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails() {
    var a = new Date(Date.now());
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
  constructor() {
  }

  ngOnInit() {
  }

}
