import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <nav class="navbar fixed-top navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand" href=""> Creative Cars </a>

      <button type="button" class="btn btn-outline-light">Post your ad</button>
    </nav>
  `,
  styles: [''],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
