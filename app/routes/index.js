import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, text: 'There is No Hope' },
      { id: 2, text: 'God does not love me' },
      { id: 3, text: 'God does not answer my prayers' },
      { id: 4, text: 'God does not see me' },
      { id: 5, text: 'Waiting on God is futile' },
      { id: 6, text: 'It is bad to show weakness and be vulnerable' },
      { id: 7, text: 'I am alone' },
      { id: 8, text: 'I cannot overcome sin' },
    ];
  }
}
