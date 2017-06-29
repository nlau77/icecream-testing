import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page from 'react-page-object';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Passing test', () => {
  let page;

  beforeEach(() => {
    page = new Page(<App />)
  });

  afterEach(() => {
    page.destroy();
  });

  it('should pass', () => {
    expect(page.content()).toMatch(/Welcome to React/)
  });
})
