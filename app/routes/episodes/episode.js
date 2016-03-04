import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('episode', params.episode_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('selectedWriters', model.get('writers'));
  }
});