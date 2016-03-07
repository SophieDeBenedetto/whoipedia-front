import Ember from 'ember';

export default Ember.Controller.extend({

  currentEpisode: null,

  episodeController: Ember.inject.controller('episodes.episode'),
  allSeasons: Ember.computed.reads('episodeController.allSeasons'),

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

  bubbleData: Ember.computed(function() {
    return [
      {
        value: 825111,
        label: 'San Francisco'
      },
      {
        value: 984299,
        label: 'San Jose'
      },
      {
        value: 400740,
        label: 'Oakland'
      }
    ]
  }),

  actions: {
    selectEp(episode){
      this.set('currentEpisode', episode)
    },

    updateEpisode(episode){
      episode.save().then((episode)=>{
        if (episode.get('season') != this.get('model')) {
          this.set('currentEpisode', null);
        }
      });
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
    },

    selectSeason(selectedSeason, episode){
      episode.set('season', selectedSeason);
    }
  }
});
