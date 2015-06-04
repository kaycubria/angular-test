angular.module('artCollectionModule', [])
    .controller('artCollectionController', function($scope, $location, artListService) {
      var acc = this;
      acc.sortCriteria;
      acc.personObject = {};
      acc.personObject.name = 'Bob';
      acc.sortCriteria = {};
      artListService.getArt().then(function(response){
            acc.artworks = response.data;
        });
      acc.searchUpdated = function() {
            console.log('input value changed');
          };
      acc.goToDetails = function(artwork){
      console.log('clicked');
      $location.url('/productDetail/' + artwork);
    }
  })
    .service('artListService', function($http){
        var als = this;

        als.getArt = function(){
            return $http.get('data/artworks.json');
        };

        // als.getSecondPieceOfData = function(){
        //     return $http.get('data/')
        // }

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
