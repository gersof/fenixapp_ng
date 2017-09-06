import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanddetailComponent } from './banddetail.component';

describe('BanddetailComponent', () => {
  let component: BanddetailComponent;
  let fixture: ComponentFixture<BanddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
