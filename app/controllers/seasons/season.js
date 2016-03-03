import Ember from 'ember';

export default Ember.Controller.extend({
  
  newEpisode: Ember.computed(function(){
    let newEpisode = this.store.createRecord('episode');
    this.get('model').get('episodes').addObject(newEpisode)
    return newEpisode;
  }),

  actions: {
    selectEp(episode){
      this.set('currentEpisode', episode)
    },

    updateEpisode(episode){
      episode.save();
    }, 

    saveEpisode(episode){
      episode.set('season', this.get('model'))
      episode.save();
    }
  }
});
