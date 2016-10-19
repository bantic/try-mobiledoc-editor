import Ember from 'ember';

export default Ember.Controller.extend({
  mobiledoc: null,
  actions: {
    onChange(mobiledoc) {
      Ember.run.later(() => {
        let changedMobiledoc = Ember.copy(mobiledoc, true);
        this.set('mobiledoc', changedMobiledoc);
      }, 1000);
    }
  }
});
