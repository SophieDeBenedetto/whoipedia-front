import Ember from 'ember';

export default Ember.Controller.extend({

  allSeasons: Ember.computed(function(){
   return this.store.findAll('season');
  }),

  actions: {
    update(){
      var episode = this.get('model');
      episode.save();
    }, 

    transition(){
      this.transitionToRoute("episodes");
    }, 

    selectSeason(season, episode=null){
      var episode = this.get('model');
      episode.set('season', season);
    }
  }
});
