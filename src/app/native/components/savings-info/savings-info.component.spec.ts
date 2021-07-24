import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsInfoComponent } from './savings-info.component';

describe('SavingsInfoComponent', () => {
  let component: SavingsInfoComponent;
  let fixture: ComponentFixture<SavingsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
