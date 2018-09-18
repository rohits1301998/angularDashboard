import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedUsersComponent } from './visited-users.component';

describe('VisitedUsersComponent', () => {
  let component: VisitedUsersComponent;
  let fixture: ComponentFixture<VisitedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
