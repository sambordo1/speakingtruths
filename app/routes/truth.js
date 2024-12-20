import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TruthRoute extends Route {
  @service truths;

  model(params) {
    let lieNumber = parseInt(params.lie_number, 10);
    // Get the next truth for this lie
    let nextTruth = this.truths.getNextTruth(lieNumber);
    return {
      lieNumber,
      truth: nextTruth
    };
  }
}
