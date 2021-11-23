import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
  
  newName ='';

  

  stack: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stack = this.getStackFromLocalStorage();

  }

  getStackFromLocalStorage() {
      return JSON.parse(localStorage.getItem('savedStack') as string) || [];
    }

  
  addName() {
    
    
    if (this.newName.trim()) {
      this.stack.push(this.newName.trim());
      
     // const savedStack = JSON.parse(localStorage.getItem('savedStack') as string) || [];
      localStorage.setItem('savedStack', JSON.stringify(this.stack));
     // this.stack
     // console.log('savedStack! ',savedStack )
      this.newName = '';
    }
  }


  removeName(id: number) {
    console.log('id', id)

    this.stack.splice(id,1);
    localStorage.setItem('savedStack', JSON.stringify(this.stack));

  }

}
