import {Rx} from '@cycle/core'

function textareaValue(actions) {
  return actions.keydownOnTextarea$
}

function parsedMarkdownHtml(actions) {
  return actions.parseMarkdown$.startWith('')
}

function modelForMarkdown(actions) {
  return textareaValue(actions);
}

function modelForDOM(actions) {
  return Rx.Observable.combineLatest(
    parsedMarkdownHtml(actions),
    (...objects) => Object.assign({}, ...objects)
  );
}

export { modelForDOM, modelForMarkdown }
