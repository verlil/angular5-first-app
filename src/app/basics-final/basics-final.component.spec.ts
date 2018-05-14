import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsFinalComponent } from './basics-final.component';

describe('BasicsFinalComponent', () => {
  let component: BasicsFinalComponent;
  let fixture: ComponentFixture<BasicsFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
