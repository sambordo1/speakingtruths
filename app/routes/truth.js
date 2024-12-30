import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TruthRoute extends Route {
  @service truths;

  model(params) {
    let lieNumber = parseInt(params.lie_number, 10);
    let singleTruth = this.truths.getNextTruth(lieNumber);         // one shuffled verse
    let allTruths = this.truths.getAllTruthsForLie(lieNumber);     // full array

    return {
      lieNumber,
      truth: singleTruth,  // { reference, verses }
      allTruths            // [ { reference, verses }, { reference, verses }, ... ]
    };
  }
}

