import {Rx} from '@cycle/core';
import Marked from 'marked';

function createResponse$(renderer) {
  return Rx.Observable.create(observer => {
    marked(raw, (err, content) => {
      if(err) {
        observer.onError(err);
      } else {
        observer.onNext(content);
        observer.onCompleted();
      }
    });
  });
}

export function makeMarkdownDriver(marked = new Marked()) {
  return function markdownDriver(request$) {
    return request$.map( raw => {
      let response$ = createResponse$(marked, raw);
      response$.request = raw;
      return response$;
    });
  }
}
