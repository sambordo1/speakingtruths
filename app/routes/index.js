import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, text: 'There is No Hope' },
      { id: 2, text: 'God does not love me' },
      { id: 3, text: 'God does not answer my prayers' },
      { id: 4, text: 'God does not see me' },
      { id: 4, text: 'Waiting on God is futile' },
      { id: 5, text: 'It is bad to show weakness and be vulnerable' },
      { id: 6, text: 'I am alone' },
      { id: 7, text: 'I cannot overcome sin' },
    ];
  }
}
