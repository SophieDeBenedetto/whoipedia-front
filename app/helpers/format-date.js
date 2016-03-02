import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(currentDate){ 
  return moment().format('LL');

});