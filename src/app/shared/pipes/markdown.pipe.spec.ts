import { Component } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService } from '../../core/services/markdown.service';

@Component({
  template: '{{value | markdown}}'
})
class StubComponent {
  public value = 'mock value';
}

describe('MarkdownPipe', () => {

  let stubComponent: StubComponent;
  let fixture: ComponentFixture<StubComponent>;

  let markdownSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StubComponent,
        MarkdownPipe
      ],
      providers: [
        {provide: MarkdownService, useValue: jasmine.createSpyObj('markdownService', ['transform'])}
      ]
    }).compileComponents();
  }));

  beforeEach(inject([MarkdownService], markdownService => {
    markdownSpy = markdownService.transform.and.returnValue('mock markdown');
    fixture = TestBed.createComponent(StubComponent);
    stubComponent = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should transform markdown to html', () => {
    fixture.detectChanges();
    expect(markdownSpy).toHaveBeenCalledWith('mock value');
    expect(fixture.debugElement.nativeElement.innerHTML).toEqual('mock markdown');
  });

});
