import {Rx} from '@cycle/core';
import marked from 'markdown';

function createResponse$(renderer) {
  return Rx.Observable.create(observer => {
    renderer(raw || '', (err, content) => {
      if(err) {
        observer.onError(err);
      } else {
        observer.onNext(content);
        observer.onCompleted();
      }
    });
  });
}

export default function makeMarkdownDriver(marked = marked) {
  return function markdownDriver(request$) {
    return request$.map( raw => {
      let response$ = createResponse$(marked, raw);
      response$.request = raw;
      return response$;
    });
  }
}
