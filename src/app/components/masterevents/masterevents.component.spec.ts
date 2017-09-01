import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastereventsComponent } from './masterevents.component';

describe('MastereventsComponent', () => {
  let component: MastereventsComponent;
  let fixture: ComponentFixture<MastereventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastereventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastereventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
