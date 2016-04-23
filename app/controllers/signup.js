import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    save(user){
      let newUser = user;
      newUser.save().catch((reason) => {
        this.set('errorMessage', reason)
      }).then((user)=>{
        this.get('session').authenticate('authenticator:devise', newUser.get('email'), newUser.get('password')).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }
  
});
