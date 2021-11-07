import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaitomiAprasymasComponent } from './skaitomi-aprasymas.component';

describe('SkaitomiAprasymasComponent', () => {
  let component: SkaitomiAprasymasComponent;
  let fixture: ComponentFixture<SkaitomiAprasymasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaitomiAprasymasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkaitomiAprasymasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
