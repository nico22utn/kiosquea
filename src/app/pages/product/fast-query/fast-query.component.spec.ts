import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastQueryComponent } from './fast-query.component';

describe('FastQueryComponent', () => {
  let component: FastQueryComponent;
  let fixture: ComponentFixture<FastQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastQueryComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
