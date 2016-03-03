import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    edit(){
      this.toggleProperty('isEditing');
    }, 

    submit(){
      this.attrs.triggerUpdate();
      this.toggleProperty('isEditing');
    }
  }
});
