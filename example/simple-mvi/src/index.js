import 'babel-core/polyfill';

import Cycle, {Rx} from '@cycle/core'
import {makeDOMDriver} from '@cycle/dom';
import {makeMarkdownDriver} from 'cycle-markdown-driver';
import view from './views';
import {modelForDOM, modelForMarkdown} from './models';
import {intentForDOM, intentForMarkdown} from './intent';

const main = (responses) => {
  let tree$ = view(modelForDOM(intentForDOM(responses)))
  let md$ = modelForMarkdown(intentForMarkdown(responses));

  return {
    DOM: tree$,
    MARKDOWN: md$
  }
};

Cycle.run(main, {
  DOM: makeDOMDriver('#root'),
  MARKDOWN: makeMarkdownDriver()
});
