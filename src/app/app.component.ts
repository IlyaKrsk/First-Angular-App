import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface NavButtons {
  buttonName: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navButtons: NavButtons[] = [
    {buttonName: 'Top', path: ''},
    {buttonName: 'Saved', path: 'saved'},
    {buttonName: 'Page2', path: 'page2'}
  ];
  constructor(private router: Router) {   
  }

  navigate(path:string) {
    this.router.navigate([path]);
  }
}
