import root from './root';

export default function view(state$){
  return state$.map(root);
};
