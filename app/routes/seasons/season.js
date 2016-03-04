import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('season', params.season_id);
  }, 

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('currentEpisode', null);
  }
});