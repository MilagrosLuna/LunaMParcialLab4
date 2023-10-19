import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersDELETEComponent } from './containers-delete.component';

describe('ContainersDELETEComponent', () => {
  let component: ContainersDELETEComponent;
  let fixture: ComponentFixture<ContainersDELETEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersDELETEComponent]
    });
    fixture = TestBed.createComponent(ContainersDELETEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
