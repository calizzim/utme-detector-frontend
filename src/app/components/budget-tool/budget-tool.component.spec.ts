import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetToolComponent } from './budget-tool.component';

describe('BudgetToolComponent', () => {
  let component: BudgetToolComponent;
  let fixture: ComponentFixture<BudgetToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
