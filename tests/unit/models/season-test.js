/* jshint expr:true */
import { expect } from 'chai';
import Ember from 'ember';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'season',
  'Season',
  {
    // Specify the other units that are required for this test.
      needs: ['model:writer', 'model:episode']
  },
  function() {
   

    it('has a number, a doctor, a start date and an end date', function() {
      const season = this.subject({ number: "25", doctor: "John Hurt", startDate: "02 March 5777", endDate: "07 Jun 5773" });
      expect(season.get('number')).to.eq("25");
      expect(season.get('doctor')).to.eq("John Hurt");
      expect(season.get('startDate')).to.eq("02 March 5777");
      expect(season.get('endDate')).to.eq("07 Jun 5773");
    });

    it('should have many episodes', function() {
      const season = this.store().modelFor('season');
      const relationship = Ember.get(season, 'relationshipsByName').get('episodes');
      expect(relationship.kind).to.eq("hasMany");
    });

    it('should have many writers', function() {
      const season = this.store().modelFor('season');
      const relationship = Ember.get(season, 'relationshipsByName').get('writers');
      expect(relationship.kind).to.eq("hasMany");
    });

  }
);