import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasomiComponent } from './rasomi.component';

describe('RasomiComponent', () => {
  let component: RasomiComponent;
  let fixture: ComponentFixture<RasomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RasomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RasomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
