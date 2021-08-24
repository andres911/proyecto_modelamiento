import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrelinealComponent } from './regrelineal.component';

describe('RegrelinealComponent', () => {
  let component: RegrelinealComponent;
  let fixture: ComponentFixture<RegrelinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegrelinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrelinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
