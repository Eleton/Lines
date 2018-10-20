import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorLinesComponent } from './actor-lines.component';

describe('ActorLinesComponent', () => {
  let component: ActorLinesComponent;
  let fixture: ComponentFixture<ActorLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
