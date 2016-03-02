import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  season: DS.hasMany('season', {async: true}),
  episodes: DS.hasMany('episode', {async: true})
});


