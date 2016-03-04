import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    edit(){
      this.toggleProperty('isEditing');
    }, 

    submit(){
      let episode = this.get('episode')
      this.attrs.triggerUpdate(episode);
      this.toggleProperty('isEditing');
    }, 

    destroy(){
      let episode = this.get('episode');
      episode.destroyRecord();
      this.attrs.triggerTransition(episode);
    }, 

    onSelectChange(selection, value){
      let episode = this.get('episode')
      this.attrs.triggerSelectSeason(selection, episode);
    }
  }
});


