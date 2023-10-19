import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersLISTComponent } from './containers-list.component';

describe('ContainersLISTComponent', () => {
  let component: ContainersLISTComponent;
  let fixture: ComponentFixture<ContainersLISTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainersLISTComponent]
    });
    fixture = TestBed.createComponent(ContainersLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
