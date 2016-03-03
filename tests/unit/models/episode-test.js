/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'episode',
  'Episode',
  {
    // Specify the other units that are required for this test.
      needs: ['model:writer', 'model:season']
  },
  function() {
   

    it('has a name, air date, and description', function() {
      const season = this.subject({ name: "The Dawn of the Daleks", airDate: "01 Jan 1901", description: "A real episode that really aired"});
      expect(season.get('name')).to.eq("The Dawn of the Daleks");
      expect(season.get('airDate')).to.eq("01 Jan 1901");
      expect(season.get('description')).to.eq("A real episode that really aired");
    });

    it('should have many writers', function() {
      const episode = this.store().modelFor('episode');
      const relationship = Ember.get(episode, 'relationshipsByName').get('writers');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should belong to a season', function() {
      const episode = this.store().modelFor('episode');
      const relationship = Ember.get(episode, 'relationshipsByName').get('season');
      expect(relationship.kind).to.eq("belongsTo");
    });

  }
);