import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TruthController extends Controller {
  @tracked showAll = false; // default to showing only single scripture

  @action
  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
