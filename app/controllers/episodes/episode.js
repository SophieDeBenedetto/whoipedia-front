import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update(){
      var episode = this.get('model')
      episode.save();
    }, 

    transition(){
      this.transitionToRoute("episodes");
    }
  }
});
