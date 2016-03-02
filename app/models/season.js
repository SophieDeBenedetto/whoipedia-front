import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  episodes: DS.hasMany('episode', {async: true}),
  writers: DS.hasMany('writer', {async: true})
});


