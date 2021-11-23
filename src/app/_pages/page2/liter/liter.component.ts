import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liter',
  templateUrl: './liter.component.html',
  styleUrls: ['./liter.component.scss']
})
export class LiterComponent implements OnInit {

  @Input() name?:string;
  @Output() removeNameEmitToParent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeName() {    
    this.removeNameEmitToParent.emit();
  }

}
