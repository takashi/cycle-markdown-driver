import {Rx} from '@cycle/core';
import marked from 'marked';

function createResponse$(renderer, raw) {
  return Rx.Observable.create(observer => {
    renderer(raw || '', (err, content) => {
      if(err) {
        observer.onError(err);
      } else {
        observer.onNext({content});
        observer.onCompleted();
      }
    });
  });
}

export default function makeMarkdownDriver(renderer = marked) {
  return function markdownDriver(request$) {
    return request$.map( raw => {
      let response$ = createResponse$(renderer, raw);
      response$.request = raw;
      return response$;
    });
  }
}
