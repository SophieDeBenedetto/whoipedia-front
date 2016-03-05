import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'https://whoipedia-api.herokuapp.com/users/sign_in'
});