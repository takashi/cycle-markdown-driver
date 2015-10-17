/** @jsx hJSX */
import {hJSX} from '@cycle/dom';

export default function root(...args){
  return (
    <div>
      <textarea name="raw" id="raw" cols="30" rows="10"></textarea>
      <div id="markdown">{args[0][1]}</div>
    </div>
  );
}
