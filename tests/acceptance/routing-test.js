/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Ember from 'ember';

describe('Acceptance: RoutingTest', function() {
  var application;
  this.timeout(450000);

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('links to seasons, episodes and writers from the landing page', function() {
    visit('/');

    andThen(function() {
       expect(find('ul li#seasons a').attr('href')).to.eq("/seasons");
       expect(find('ul li#episodes a').attr('href')).to.eq("/episodes");
       expect(find('ul li#writers a').attr('href')).to.eq("/writers");
    });
  });

  it('lists all of the seasons on the seasons index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#seasons a');
      andThen(function() {
        expect(find('ul li.seasons').length).to.eq(2);
        expect(find('ul li.seasons:first a').attr('href')).to.eq("/seasons/1");
        expect(find('ul li.seasons:first a').text().trim()).to.eq("Season 2");
      });
    });
  });

   it('shows the season details on the season show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#seasons a');
      andThen(function() {
        click('ul li.seasons:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.eq("Season 2");
          expect(find('ul li.episodes:first').text().trim()).to.eq("New Earth");
          expect(find('ul li.episodes:first a').attr('href')).to.eq("/episodes/1");
        });
      });
    });
  });

  it('lists all of the episodes on the episodes index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#episodes a');
      andThen(function() {
        expect(find('ul li.episodes').length).to.eq(6);
        expect(find('ul li.episodes:first a').attr('href')).to.eq("/episodes/1");
        expect(find('ul li.episodes:first a').text().trim()).to.eq("New Earth");
      });
    });
  });

   it('shows the episode details on the episode show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#episodes a');
      andThen(function() {
        click('ul li.episodes:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.eq("New Earth");
          expect(find('p#season').text().trim()).to.eq("Season 2");
          expect(find('p#season a').attr('href')).to.eq("/seasons/1");
          expect(find('ul li.writers:first a').text().trim()).to.eq("Steven Moffat");
          expect(find('ul li.writers:first a').attr('href')).to.eq("/writers/1");
        });
      });
    });
  });

   it('lists all of the writers on the writers index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#writers a');
      andThen(function() {
        expect(find('ul li.writers').length).to.eq(4);
        expect(find('ul li.writers:first a').attr('href')).to.eq("/writers/1");
        expect(find('ul li.writers:first a').text().trim()).to.eq("Steven Moffat");
      });
    });
  });

   it('shows the writer details on the writer show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#writers a');
      andThen(function() {
        click('ul li.writers:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.include("Steven Moffat");
          expect(find('ul li.episodes a').text().trim()).to.include("Tooth and Claw");
          expect(find('ul li.episodes:first a').attr('href')).to.eq("/episodes/1");
        });
      });
    });
  });


});
