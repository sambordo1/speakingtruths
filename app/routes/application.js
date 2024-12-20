import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service truths;

  async model() {
    let response = await fetch('https://lx1rlncjik.execute-api.us-east-1.amazonaws.com/prod/truth-sets'); 
    let data = await response.json();
    this.truths.setTruthSets(data); // Store in service
    return data;
  }
}
