# Cycle Markdown Driver

A Cycle.js Driver for parsing Markdown from text.
This package is small, and untested.

```
npm install cycle-markdown-driver
```

## Usage

```js
import Cycle, {Rx} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeMarkdownDriver} from 'cycle-markdown-driver';

function main(responses) {
  const keydownOnTextarea$ = DOM.select('#raw').events('keydown')
    .debounce(500)
    .map(e => e.target.value)
    .filter(query => query.length > 0)

  const vtree$ = responses.MARKDOWN
    .mergeAll()
    .map(html => {
      h('div.container', [
        h('p', html)
      ])
    });

  return {
    DOM: vtree$,
    MARKDOWN: keydownOnTextarea$
  };
}

Cycle.run(main, {
  DOM: makeDOMDriver('.js-container'),
  MARKDOWN: makeJSONPDriver()
})
```
