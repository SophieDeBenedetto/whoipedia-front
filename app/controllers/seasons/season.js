import Ember from 'ember';

export default Ember.Controller.extend({

  newEpisode: Ember.computed({
    get() {
      let newEpisode = this.store.createRecord('episode');
      this.get('model').get('episodes').addObject(newEpisode)
      return newEpisode;
    }, 

    set() {
      let newEpisode = this.store.createRecord('episode');
      this.get('model').get('episodes').addObject(newEpisode)
      return newEpisode;

    }
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
      this.set('newEpisode');
    }, 

    transition(episode){
      let season = this.get('model');
      season.get('episodes').removeObject(episode)
      this.set('currentEpisode', null);
      this.transitionToRoute('seasons.season', this.get('model').get('id'));
    } 

    // resetCurrentEpisode(episode){
    // }
  }
});
