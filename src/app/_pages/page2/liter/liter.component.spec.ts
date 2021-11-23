import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiterComponent } from './liter.component';

describe('LiterComponent', () => {
  let component: LiterComponent;
  let fixture: ComponentFixture<LiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
