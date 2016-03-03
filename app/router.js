import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('seasons', function() {
    this.route('season', { path: '/:season_id' });
    this.route('new');
  });
  this.route('episodes', function() {
    this.route('episode', { path: '/:episode_id' });
    this.route('new');
  });
  this.route('writers', function() {
    this.route('writer', { path: '/:album_id' });
  });
  this.route('login');
  this.route('users', function() {
    this.route('user', { path: '/:user_id' });
  });
  this.route('signup');
});

export default Router;
 