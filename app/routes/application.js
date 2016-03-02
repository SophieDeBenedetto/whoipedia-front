import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    debugger;
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    debugger;
    return this.get('sessionAccount').loadCurrentUser();
  },

  actions: {
    logout(){
      this.get("session").invalidate();
      alert("bye! we'll miss you :(");
    }
  }
  
});

  
