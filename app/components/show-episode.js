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
    }
  }
});
