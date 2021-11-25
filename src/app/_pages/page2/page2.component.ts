import { Component, OnInit, Input, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, OnDestroy {
  
  newName ='';
  count:number = 0;
  exampleDate = "abc fasd fdasf asd asdf df asdf adsf asdf asdf asd fasd ";

  

  stack: string[] = [];

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    

    this.stack = this.getStackFromLocalStorage();

    console.log('route', this.router )

    this.route.queryParams.subscribe(() => {
      console.log('route', this.router )
    })

    

  }

  ngOnDestroy(): void {
    
    console.log('Дестрой Page2', )

  }

  countPlus() {
    this.count++;
  }

  countMinus() {
    this.count--;
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
