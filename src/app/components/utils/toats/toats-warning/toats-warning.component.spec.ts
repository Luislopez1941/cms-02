import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToatsWarningComponent } from './toats-warning.component';

describe('ToatsWarningComponent', () => {
  let component: ToatsWarningComponent;
  let fixture: ComponentFixture<ToatsWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToatsWarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToatsWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
