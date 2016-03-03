/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'writer',
  'Writer',
  {
    // Specify the other units that are required for this test.
      needs: ['model:episode', 'model:season']
  },
  function() {
   

    it('has a name', function() {
      const season = this.subject({ name: "Sophie DeBenedetto"});
      expect(season.get('name')).to.eq("Sophie DeBenedetto");
    });

    it('should have many episodes', function() {
      const writer = this.store().modelFor('writer');
      const relationship = Ember.get(writer, 'relationshipsByName').get('episodes');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should have many seasons', function() {
      const writer = this.store().modelFor('writer');
      const relationship = Ember.get(writer, 'relationshipsByName').get('season');
      expect(relationship.kind).to.eq("hasMany");
    });

  }
);