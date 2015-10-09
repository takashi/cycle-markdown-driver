/** @jsx hJSX */
import {hJSX} from '@cycle/dom';

export default function root({content}){
  return (
    <div>
      <textarea name="raw" id="raw" cols="30" rows="10"></textarea>
      <div id="markdown">{content}</div>
    </div>
  );
}
