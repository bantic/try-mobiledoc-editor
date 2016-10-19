import Ember from 'ember';

const simpleMobiledoc = {
  version: '0.3.0',
  markups: [],
  cards: [],
  atoms: [],
  sections: [
    [1, "P", [
      [0, [], 0, "simple mobiledoc..."]
    ]]
  ]
};

export default Ember.Route.extend({
  model() {
    return simpleMobiledoc;
  },

  setupController(controller, model) {
    controller.set('mobiledoc', model);
  }
});
