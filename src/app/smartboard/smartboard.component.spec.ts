import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartboardComponent } from './smartboard.component';

describe('SmartboardComponent', () => {
  let component: SmartboardComponent;
  let fixture: ComponentFixture<SmartboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
