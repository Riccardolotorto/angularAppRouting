import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontagnaComponent } from './montagna.component';

describe('MontagnaComponent', () => {
  let component: MontagnaComponent;
  let fixture: ComponentFixture<MontagnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MontagnaComponent]
    });
    fixture = TestBed.createComponent(MontagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
