import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import shuffleArray from '../utils/shuffle-array';

export default class TruthsService extends Service {
  // Store all truth sets once they are fetched
  @tracked truthSets = {};

  // Local caches for shuffled truths and indexes
  shuffledTruthsMap = {};

  truthIndexMap = {};

  // Initialize the truth sets from the fetched data
  setTruthSets(data) {
    this.truthSets = data;
  }

  getNextTruth(lieNumber) {
    let lie = lieNumber.toString();
    
    // If we haven't yet shuffled the truths for this lie, do it now
    if (!this.shuffledTruthsMap[lie]) {
      this.shuffledTruthsMap[lie] = shuffleArray([...this.truthSets[lie]]);
      this.truthIndexMap[lie] = 0;
    }

    let truths = this.shuffledTruthsMap[lie];
    let index = this.truthIndexMap[lie];
    let nextTruth = truths[index];

    index++;
    if (index >= truths.length) {
      index = 0;
      truths = shuffleArray([...this.truthSets[lie]]);
      this.shuffledTruthsMap[lie] = truths;
    }

    this.truthIndexMap[lie] = index;
    return nextTruth;
  }
}
