function keydownOnTextarea({DOM}) {
  const keydownOnTextarea$ = DOM.select('#raw').events('keydown')
    .debounce(500)
    .map(e => e.target.value)
    .filter(query => query.length > 0)
  return { keydownOnTextarea$ }
}

function parseMarkdown({MARKDOWN}) {
  const parseMarkdown$ = MARKDOWN.map(body => body)
    .mergeAll()
    .map(res => res);
  return { parseMarkdown$ }
}

function intentForMarkdown(responses) {
  return {
    ...keydownOnTextarea(responses)
  }
}

function intentForDOM(responses) {
  return {
    ...parseMarkdown(responses)
  }
}

export {intentForDOM, intentForMarkdown}
