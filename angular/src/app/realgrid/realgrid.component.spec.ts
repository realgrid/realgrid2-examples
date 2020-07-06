import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealgridComponent } from './realgrid.component';

describe('RealgridComponent', () => {
  let component: RealgridComponent;
  let fixture: ComponentFixture<RealgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
