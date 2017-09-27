import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceViewerComponent } from './source-viewer.component';

describe('SourceViewerComponent', () => {
  let component: SourceViewerComponent;
  let fixture: ComponentFixture<SourceViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
