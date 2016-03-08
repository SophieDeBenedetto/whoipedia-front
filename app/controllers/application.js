import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),
  ajax: Ember.inject.service(),
  
  init: function() {
    this.get('ajax').request('seasonsmeta/aliens').then((r)=>{
        this.set('bubbleData', r.seasonsmeta);
    })
  }
});
