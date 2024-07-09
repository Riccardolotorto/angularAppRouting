import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MareComponent } from './mare.component';

describe('MareComponent', () => {
  let component: MareComponent;
  let fixture: ComponentFixture<MareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MareComponent]
    });
    fixture = TestBed.createComponent(MareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
