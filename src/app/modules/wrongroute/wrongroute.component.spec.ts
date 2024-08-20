import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongrouteComponent } from './wrongroute.component';

describe('WrongrouteComponent', () => {
  let component: WrongrouteComponent;
  let fixture: ComponentFixture<WrongrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongrouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrongrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
