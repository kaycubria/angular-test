angular.module('app.artCollectionModule', ['collectionDetailModule'])
    .controller('artCollectionController', function($scope) {
      var acc = this;
      acc.sortCriteria;
      acc.personObject = {};
      acc.personObject.name = 'Bob';
      acc.artworks = [
           {
             "name": "Interior at Nice, 1920",
             "artist": "Henri Matisse",
             "description": "Room with woman on the balcony, 1920",
             "imageurl": "http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000260/196885_3116086.jpg"
           },{
             "name": "Red Armchair",
             "artist": "Pablo Picasso",
             "description": "Abstracted woman sitting in an armchair 1931",
             "imageurl": "http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000276/182408_3296652.jpg"
           },{
             "name": "Nighthawk",
             "artist": "Edward Hopper",
             "description": "Scene from outside a restaurant 1942",
             "imageurl": "http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000254/187455_3026962.jpg"
           }
       ];
       acc.searchUpdated = function() {
            console.log('input value changed');
        };
    })
    .controller('formController', function($scope){
  });
