import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFolderComponent } from './pop-up-folder.component';

describe('PopUpFolderComponent', () => {
  let component: PopUpFolderComponent;
  let fixture: ComponentFixture<PopUpFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpFolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
