import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneCallsComponent } from './all-in-one-calls.component';

describe('AllInOneCallsComponent', () => {
  let component: AllInOneCallsComponent;
  let fixture: ComponentFixture<AllInOneCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllInOneCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllInOneCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
