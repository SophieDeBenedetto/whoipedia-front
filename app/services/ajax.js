import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  session: Ember.inject.service(),
  host: 'https://whoipedia-api.herokuapp.com/api/v1',
  headers: Ember.computed('session.data.authenticated.token', {
    get() {
      let headers = {};
      const authToken = this.get('session.data.authenticated.token');
      if (authToken) {
        headers['auth-token'] = authToken;
      }
      return headers;
    }
  })
});