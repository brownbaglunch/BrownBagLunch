'use strict';

new Vue({
  el: '#app-vue',
  data: {
    filtering: '',
    selectedCity: null,
    cities: baggerData.cities,
    baggers: baggerData.speakers,
    baggersFilteredCount: baggerData.speakers.length,
    contact: {
      success: false,
      error: null,
      bagger: null,
      email: null,
      title: null,
      body: null
    }
  },
  computed: {
    displayedBaggers: function(){
      var filtered = this.filtered(this.baggers);
      return filtered.sort(function(bagger1, bagger2){
        return bagger1.name.localeCompare(bagger2.name);
      })
    }
  },
  methods: {
    // Filter baggers list
    filtered: function(baggers) {
      if (this.filtering === '' && !this.selectedCity) {
        this.baggersFilteredCount = baggers.length;
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
    // Open contact modal
    openContactModal: function(bagger) {
      this.contact = {
        success: false,
        error: null,
        bagger: bagger.contacts.mail,
        email: null,
        title: 'Contact pour un BBL',
        body: null
      }
      $('#contact-modal').modal('show');
    },
    // Envoi de l'email
    sendEmail: function() {
      $.ajax({
        url: "http://nodemailsender.herokuapp.com/mail",
        data: {
          from: this.contact.email,
          to: this.contact.bagger,
          subject: this.contact.title,
          message: this.contact.body
        },
        type: 'POST',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function(data) {
          this.contact.success = true;
          $('#contact-modal').modal('hide');
        }.bind(this),
        error: function(xhr, status, errorThrown) {
          this.contact.error = xhr.responseText;
        }.bind(this)
      });
    }
  }
});
