import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  doctor: DS.attr('string'),
  airDate: DS.attr('string'),
  season: DS.belongsTo('season', {async: true}),
  description: DS.attr('string'),
  writers: DS.hasMany('writer', {async: true})
});


