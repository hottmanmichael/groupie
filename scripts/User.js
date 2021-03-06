
'use strict';

//save 3 item types in localStorage
   //groupieUser
   //groupieArtist
   //groupieCache

/**
* Save 3 Items to localStorage
   * groupieUser:{
      firstname:
      lastname:
      location: (zip code)
      artists: ['id1', 'id2', 'id3', etc]
   }
   * groupieCurrentArtist:{
      id: (spotify id),
      name: (string lower case)
   }
   * groupieCache: [
      {
         id: (spotify id)
         name: (spotify name)
         data: {
            spotify: {}
            bandsInTown: {}
            musixMatch: {}
         }
      }
      {
         id: (spotify id)
         name: (spotify name)
         data: {
            spotify: {}
            bandsInTown: {}
            musixMatch: {}
         }
      }
      etc.
   ]
*/


var User = function() {
   var MODEL = 'GroupieUser';
   var CACHE = 'GroupieCache';
   var CURRENT_ARTIST = 'GroupieCurrentArtist';

   this.authenticated = function() {
      //checks for user model GroupieUser
      //if key exists in local storage, return true, else false
      return localStorage.getItem(MODEL) !== null;
   };

   this.create = function() {
      localStorage.setItem(MODEL, JSON.stringify({
         firstname: "",
         lastname: "",
         location: null,
         artists: []
      }));
   };

   this.establish = function(usr) {
      for (var item in usr) {
         this[item] = usr[item];
      }
   }

   this.fetchLocal = function(pullFrom, key) {
      if (typeof pullFrom === 'undefined' || pullFrom === null) return null;
      switch (pullFrom) {
         case 'MODEL':
            return JSON.parse(localStorage.getItem(MODEL));
            break;
         case 'CURRENT_ARTIST':
            return JSON.parse(localStorage.getItem(CURRENT_ARTIST));
            break;
         case 'CACHE':
            return JSON.parse(localStorage.getItem(CACHE));
            break;
         default:
            /** FIXME: Handle Error Here **/
            return null; //err
      }
   };

   this.setLocal = function(storeTo, value) {
      if (typeof storeTo === 'undefined' || storeTo === null) return null;
      switch (storeTo) {
         case 'MODEL':
            /** FIXME: Ensure correct storage! **/
            localStorage.setItem(MODEL, JSON.stringify(value));
            break;
         case 'CURRENT_ARTIST':
            /** FIXME: Ensure correct storage! **/
            localStorage.setItem(CURRENT_ARTIST, JSON.stringify(value));
            break;
         case 'CACHE':
            /** FIXME: Ensure correct storage! **/
            localStorage.setItem(CACHE, JSON.stringify(value));
            break;
         default:
            /** FIXME: Handle Error Here **/
            return null; //err
      }
   };

   this.addFavorite = function(artist, callback) {
      // console.log("user: ", user.artists);
      //FIXME: DON"T ADD IF ALREADY EXISTS! THROW ERROR!
      for (var a = 0; a < this.artists.length; a++) {
         if (this.artists[a].id === artist.id) {
            return callback({
               status: "error",
               message: "Artist already exists in favorites."
            });
         }
      }
      //add artist
      this.artists.push(artist);
      // console.log("this: ", this);
      localStorage.setItem(MODEL, JSON.stringify(this));

      // if (artist.name.length > 15) {
      //    var name = artist.name.substring(0,15) + "...";
      // } else var name = artist.name;

      //send callback response
      return callback({
         status: 'success',
         message: artist.name + " saved as favorite."
      });
   };

   this.findInCache = function() {};

   this.saveToCache = function() {};
}



var Artist = function(id, name, slug) {
   this.id = id;
   this.name = name;
   this.slug = slug;
}
Artist.prototype.fixme = function () {

};
