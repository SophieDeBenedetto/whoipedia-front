import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(index, listLength){ 
  if (index > 0 && listLength > 1) {
    return true;
  }else {
    return false;
  }

});