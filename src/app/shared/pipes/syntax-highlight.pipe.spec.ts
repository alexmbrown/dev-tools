import { SyntaxHighlightPipe } from './syntax-highlight.pipe';

describe('SyntaxHighlightPipe', () => {
  it('create an instance', () => {
    const pipe = new SyntaxHighlightPipe();
    expect(pipe).toBeTruthy();
  });
});
