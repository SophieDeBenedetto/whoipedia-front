import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  bubbleData: Ember.computed.reads('applicationController.bubbleData')
  
});
