import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToatsSuccessComponent } from './toats-success.component';

describe('ToatsSuccessComponent', () => {
  let component: ToatsSuccessComponent;
  let fixture: ComponentFixture<ToatsSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToatsSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToatsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
