import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSnippetComponent } from './text-snippet.component';

describe('TextSnippetComponent', () => {
  let component: TextSnippetComponent;
  let fixture: ComponentFixture<TextSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
