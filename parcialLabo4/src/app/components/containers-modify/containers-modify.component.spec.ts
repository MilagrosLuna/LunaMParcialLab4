import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersMODIFYComponent } from './containers-modify.component';

describe('ContainersMODIFYComponent', () => {
  let component: ContainersMODIFYComponent;
  let fixture: ComponentFixture<ContainersMODIFYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersMODIFYComponent]
    });
    fixture = TestBed.createComponent(ContainersMODIFYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
