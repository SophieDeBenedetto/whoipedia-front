import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {
    save(user){
      debugger;
      let newUser = user;
      newUser.save().then((user)=>{
        this.get('session').authenticate('authenticator:devise', newUser.get('email'), newUser.get('password')).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }
  
});
