import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticalComponent } from './tactical.component';

describe('TacticalComponent', () => {
  let component: TacticalComponent;
  let fixture: ComponentFixture<TacticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
