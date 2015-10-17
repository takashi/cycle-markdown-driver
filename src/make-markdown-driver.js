import {Rx} from '@cycle/core';
import marked from 'marked';

// https://github.com/vic/awesome-cyclejs/pull/8#issuecomment-148759962
export default function makeMarkdownDriver(renderer = marked) {
  return function markdownDriver(request$) {
    return request$.map(raw => {
      return Rx.Observable.fromCallback(renderer)(raw);
    })
  }
}
