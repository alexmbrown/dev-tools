import { LocalStorageService } from './local-storage.service';
import Spy = jasmine.Spy;

describe('LocalStorageService', () => {

  let service;

  beforeEach(() => {
    service = new LocalStorageService();
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem');
  });

  it('should have a method for storing a value in local storage', () => {
    service.set('mock key', 'mock value');
    expect(localStorage.setItem).toHaveBeenCalledWith('mock key', 'mock value');
  });

  it('should have a method for storing an object in local storage', () => {
    service.set('mock key', {mock: 'value'});
    expect(localStorage.setItem).toHaveBeenCalledWith('mock key', '{"mock":"value"}');
  });

  it('should have a method for getting a value from local storage', () => {
    service.get('mock key');
    expect(localStorage.getItem).toHaveBeenCalledWith('mock key');
  });

  it('should have a method for getting an object from local storage', () => {
    (localStorage.getItem as Spy).and.returnValue('{"mock":"value"}');
    const result = service.getObj('mock key');
    expect(localStorage.getItem).toHaveBeenCalledWith('mock key');
    expect(typeof result === 'object');
    expect(result.mock).toEqual('value');
  });

});
