import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToatsErrorComponent } from './toats-error.component';

describe('ToatsErrorComponent', () => {
  let component: ToatsErrorComponent;
  let fixture: ComponentFixture<ToatsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToatsErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToatsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
