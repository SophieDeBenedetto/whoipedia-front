import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    triggerCreate(){
      this.toggleProperty('isCreating');
    }, 

    submit(){
      let episode = this.get('episode');
      this.attrs.triggerSaveEpisode(episode);
      this.toggleProperty('isCreating');
    }
  }
});
