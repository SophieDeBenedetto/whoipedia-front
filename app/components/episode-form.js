import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  selectedWriters: [],
  actions: {
    triggerCreate(){
      if (this.get('session.isAuthenticated')) {
        this.toggleProperty('isCreating');
      }else {
        alert("Sign up or log in to create a new episode")
      }
    }, 

    submit(){
      let episode = this.get('episode');
      episode.set('writers', this.get('selectedWriters'));
      this.attrs.triggerSaveEpisode(episode);
      this.toggleProperty('isCreating');
    }, 

    cancelNew(){
      this.toggleProperty('isCreating');
    }
  }
});
