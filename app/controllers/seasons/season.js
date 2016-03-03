import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectEp(episode){
      this.set('currentEpisode', episode)
    },

    updateEpisode(episode){
      episode.save();
    }
  }
});
