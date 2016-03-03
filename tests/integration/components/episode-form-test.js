/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'episode-form',
  'Integration: EpisodeFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#episode-form}}
      //     template content
      //   {{/episode-form}}
      // `);

      this.render(hbs`{{episode-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
