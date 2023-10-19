import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesComponent } from './listado-paises.component';

describe('ListadoPaisesComponent', () => {
  let component: ListadoPaisesComponent;
  let fixture: ComponentFixture<ListadoPaisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPaisesComponent]
    });
    fixture = TestBed.createComponent(ListadoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
