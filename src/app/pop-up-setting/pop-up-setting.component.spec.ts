import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSettingComponent } from './pop-up-setting.component';

describe('PopUpSettingComponent', () => {
  let component: PopUpSettingComponent;
  let fixture: ComponentFixture<PopUpSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSettingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
