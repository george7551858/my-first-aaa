import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaGridComponent } from './aaa-grid.component';

describe('AaaGridComponent', () => {
  let component: AaaGridComponent;
  let fixture: ComponentFixture<AaaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
