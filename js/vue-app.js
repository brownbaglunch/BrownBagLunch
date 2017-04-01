'use strict';

var baggerData = window.FAKE_DATA;

for (var speak in baggerData.speakers) {
  var speaker = baggerData.speakers[speak];
  for (var session in speaker.sessions) {
    speaker.sessions[session].opened = false;
  }
  for (var i = 0; i < speaker.cities.length; i++) {
    var city = speaker.cities[i];
    var c = baggerData.cities[city];
    if (c) {
      if (c.baggers) {
        c.baggers++;
      } else {
        c.baggers = 1;
      }
    }
  }
}

new Vue({
  el: '#app-vue',
  data: {
    filtering: '',
    selectedCity: null,
    cities: baggerData.cities,
    baggers: baggerData.speakers,
    baggersFilteredCount: baggerData.speakers.length
  },
  methods: {
    // TODO Better way to do it?
    filtered: function(baggers) {
      if (this.filtering === '' && !this.selectedCity) {
        return baggers;
      }
      var filter = this.filtering.toLowerCase();
      var filteredList = baggers.filter(function(bagger) {
        if (this.selectedCity && bagger.cities.indexOf(this.selectedCity) === -1) {
          return false;
        }
        return JSON.stringify(bagger).toLowerCase().indexOf(filter) > -1;
      }.bind(this));
      this.baggersFilteredCount = filteredList.length;
      return filteredList;
    },
    toggleAbstract: function(session) {
      console.log('open abstract', session);
      session.opened = !session.opened;
      session.name = session.name + ' fbkj'
    }
  }
});
