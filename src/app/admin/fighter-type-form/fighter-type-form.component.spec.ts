import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterTypeFormComponent } from './fighter-type-form.component';

describe('FighterTypeFormComponent', () => {
  let component: FighterTypeFormComponent;
  let fixture: ComponentFixture<FighterTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FighterTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
