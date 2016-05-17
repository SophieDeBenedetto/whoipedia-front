# Whoipedia

An Ember app that hits [this Rails API](https://github.com/sophiedebenedetto/whoipedia-api) to display information about Doctor Who seasons and episodes. 

Authorization is enacted with the Ember Simple Auth library.

CRUD actions for associated records supported by Ember's embedded record mixin and the Ember Simple Select ad-on. 

D3.js used to display bubble chart of alien popularity by season.  

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* fork and clone this repo
* change into the new directory
* `npm install`
* `bower install`
* fork and clone the [API repo](https://github.com/sophiedebenedetto/whoipedia-api). Follow the instructions in that repo's README. 
* connect your adapter to the URL on which you are running your Rails API. 
  * In `app/adapters/application.js`, you should have the following:

```ruby
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api/v1',
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise'
});

```
  * In `app/authenticators/devise.js`, make sure the server token endpoint is pointing to localhost.

```ruby
import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
});
``` 

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

This app is using the following add-ons and plugins. 

* [Ember Simple Select](https://github.com/greenfieldhq/ember-simple-select)
* [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth)
* [Ember Charts](https://github.com/addepar/ember-charts)


