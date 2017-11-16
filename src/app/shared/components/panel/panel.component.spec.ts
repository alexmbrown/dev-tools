import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {

  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'mock title';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('mat-card-title')).nativeElement.innerHTML).toEqual('mock title');
  });
});
