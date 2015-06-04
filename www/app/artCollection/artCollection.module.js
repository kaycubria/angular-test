angular.module('artCollectionModule', [])
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
           },{
             "name": "American Gothic",
             "artist": "Grant Wood",
             "description": "Couple pictured outside their farmhouse 1930",
             "imageurl": "http://www.artic.edu/aic/collections/citi/images/standard/WebLarge/WebImg_000256/190741_3056034.jpg"
           }
       ];
       acc.searchUpdated = function() {
            console.log('input value changed');
        };
    })
    // .constant('MYVALUE', 3)
    // .value('someValue', 21)
    // .factory('artListFactory', function(){
    //   var internalVars;

    //   return {
    //     value: 49,
    //     myManipulator: function() {
    //       internalVars = 37;
    //     },
    //     showInternals: function() {
    //       console.log(internalVars);
    //     }
    //   };
    // })
    // .service('artListService', function($http){
    //   var als = this;

    //   als.getArt = function()
    // })
    // .factory('artListFactory', function(){
    //   return 49;
    // })
    // .service('artListService' function(){
    //   var als = this;
    //   als.value = 50;
    // })
    .controller('formController', function($scope){
      var fc = this;


      $scope.$watch($scope.submitForm, function(n, o) {console.log('watch called')}, true)
  });
