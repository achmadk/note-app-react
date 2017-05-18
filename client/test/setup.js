import {JSDOM} from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const win = new JSDOM('<!doctype html><html><body></body></html>');
const doc = win.window.document;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
