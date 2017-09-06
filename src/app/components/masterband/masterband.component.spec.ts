import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbandComponent } from './masterband.component';

describe('MasterbandComponent', () => {
  let component: MasterbandComponent;
  let fixture: ComponentFixture<MasterbandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
