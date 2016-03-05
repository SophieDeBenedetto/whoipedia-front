import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(currentDate){ 
  return moment(currentDate[0]).format("MMMM Do YYYY");

});