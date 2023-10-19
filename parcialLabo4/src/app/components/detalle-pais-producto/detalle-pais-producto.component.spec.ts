import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisProductoComponent } from './detalle-pais-producto.component';

describe('DetallePaisProductoComponent', () => {
  let component: DetallePaisProductoComponent;
  let fixture: ComponentFixture<DetallePaisProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePaisProductoComponent]
    });
    fixture = TestBed.createComponent(DetallePaisProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
