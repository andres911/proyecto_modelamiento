import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrecuadraticaComponent } from './regrecuadratica.component';

describe('RegrecuadraticaComponent', () => {
  let component: RegrecuadraticaComponent;
  let fixture: ComponentFixture<RegrecuadraticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegrecuadraticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrecuadraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
