import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimagineComponent } from './reimagine.component';

describe('ReimagineComponent', () => {
  let component: ReimagineComponent;
  let fixture: ComponentFixture<ReimagineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimagineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
