import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      { id: 1, text: 'There is No Hope for me' },
      { id: 2, text: 'God does not love me personally' },
      { id: 3, text: 'God does not answer MY prayers' },
    ];
  }
}
