let hello : string = 'Hello TypeScript, I am learning it';
// document.querySelectorAll('.app')[0].innerHTML = hello;

import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components/App';

const Root = document.querySelector('.app');

ReactDom.render(<App name="fh"/>, Root)