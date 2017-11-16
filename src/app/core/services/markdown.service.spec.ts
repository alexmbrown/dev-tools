import { MarkdownService } from './markdown.service';

describe('MarkdownService', () => {

  let service: MarkdownService;
  let consoleSpy;

  beforeEach(() => {
    service = new MarkdownService();
    consoleSpy = spyOn(console, 'error');
  });

  it('should be transform plain text to markdown', () => {
    expect(service.transform('# test header')).toContain('<h1>test header</h1>');
  });
});
