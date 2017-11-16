import { SourceService } from './source.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const ROOT_URL = 'https://raw.githubusercontent.com/alexmbrown/dev-tools/master/';
const opts = {responseType: 'text' as 'text'};

describe('SourceService', () => {

  let service;
  let httpSpy;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('http', ['get']);
    httpSpy.get.and.returnValue(Observable.of('mock data'));
    service = new SourceService(httpSpy);
  });

  it('should have a method for getting the component for a given url', done => {
    service.getComponent('/mock-url').subscribe(data => {
      expect(data).toEqual('mock data');
      expect(httpSpy.get).toHaveBeenCalledWith(`${ROOT_URL}/mock-url.component.ts`, opts);
      done();
    });
  });

  it('should have a method for getting the HTML for a given url', done => {
    service.getHTML('/mock-url').subscribe(data => {
      expect(data).toEqual('mock data');
      expect(httpSpy.get).toHaveBeenCalledWith(`${ROOT_URL}/mock-url.component.html`, opts);
      done();
    });
  });

  it('should have a method for getting the Style for a given url', done => {
    service.getStyle('/mock-url').subscribe(data => {
      expect(data).toEqual('mock data');
      expect(httpSpy.get).toHaveBeenCalledWith(`${ROOT_URL}/mock-url.component.scss`, opts);
      done();
    });
  });

  it('should have a method for getting the readme', done => {
    service.getReadme('/mock-url').subscribe(data => {
      expect(data).toEqual('mock data');
      expect(httpSpy.get).toHaveBeenCalledWith(`${ROOT_URL}/mock-url/README.md`, opts);
      done();
    });
  });

  it('should have a method for getting the readme for a given url', done => {
    service.getReadme().subscribe(data => {
      expect(data).toEqual('mock data');
      expect(httpSpy.get).toHaveBeenCalledWith(`${ROOT_URL}/README.md`, opts);
      done();
    });
  });

});
