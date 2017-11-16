import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { SourceService } from '../core/services/source.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MarkdownPipeStub } from '../test-utils/markdown-pipe.stub';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AboutComponent', () => {

  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let sourceServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        MarkdownPipeStub
      ],
      providers: [{
        provide: SourceService,
        useValue: jasmine.createSpyObj('sourceService', ['getReadme'])
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(inject([SourceService], sourceService => {
    sourceServiceSpy = sourceService;
    sourceService.getReadme.and.returnValue(Observable.of('mock readme'));

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store observable', done => {
    expect(component.readme instanceof Observable);
    component.readme.subscribe(readme => {
      expect(readme).toEqual('mock readme');
      done();
    });
  });

  it('should read the readme text', () => {
    expect(fixture.debugElement.query(By.css('div')).nativeElement.innerHTML).toEqual('mock markdown');
  });
});
