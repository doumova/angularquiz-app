import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelecomeComponent } from './welecome.component';

describe('WelecomeComponent', () => {
  let component: WelecomeComponent;
  let fixture: ComponentFixture<WelecomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelecomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
