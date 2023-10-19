import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersADDComponent } from './containers-add.component';

describe('ContainersADDComponent', () => {
  let component: ContainersADDComponent;
  let fixture: ComponentFixture<ContainersADDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersADDComponent]
    });
    fixture = TestBed.createComponent(ContainersADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
