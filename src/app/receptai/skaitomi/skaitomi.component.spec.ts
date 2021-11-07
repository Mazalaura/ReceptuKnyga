import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaitomiComponent } from './skaitomi.component';

describe('SkaitomiComponent', () => {
  let component: SkaitomiComponent;
  let fixture: ComponentFixture<SkaitomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaitomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaitomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
