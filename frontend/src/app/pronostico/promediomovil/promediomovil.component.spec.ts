import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromediomovilComponent } from './promediomovil.component';

describe('PromediomovilComponent', () => {
  let component: PromediomovilComponent;
  let fixture: ComponentFixture<PromediomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromediomovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromediomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
