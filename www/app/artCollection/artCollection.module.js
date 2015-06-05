angular.module('artCollectionModule', [])
    .controller('artCollectionController', function($scope, $location, artList, artListService) {
      var acc = this;

      acc.artworks = artList;

      acc.sortCriteria;
      acc.personObject = {};
      acc.personObject.name = 'Bob';

        acc.cancelReservation = function(){
            console.log('call the cancel');
            artListService.cancel();
        };

        acc.clickFinishedButton = function(){
            artListService.userUpdate();
        };

        artListService.getCombinedPromise().then(function(data){
            acc.message = data;
        });

        acc.searchUpdated = function() {
            console.log('input value changed');
        };
        acc.goToDetails = function(bedName){
            console.log('clicked');
            $location.url('/artDetail/' + bedName);
        };

  })
.service('artListService', function($http, $q, $rootScope, $timeout){
        var als = this;
        var myDeferredObject = $q.defer();
        var myPromise = myDeferredObject.promise;
        var myHttpPromise;

        als.getArtworks = function(){
            myHttpPromise = $http.get('data/artworks.json').then(function(response){
                return response.data;
            });

            return myHttpPromise;

        };

        als.userUpdate = function() {
            myDeferredObject.resolve('User is finished');
        };

        als.getCombinedPromise = function(){
            return $q.all([myPromise, myHttpPromise]).then(function(resolutionArray){
                console.log('finished all of the promise')
            });
        };

        als.getArt = function(name){
            return $http.get('data/artworks.json').then(function(response){
                var returnArt;
                angular.forEach(response.data, function(art){
                    if(art.name === name){
                        returnArt = art;
                    }
                });
                return returnArt;
            });
        };

        als.cancel = function() {
            myDeferredObject.reject('User cancelled');
        };

        als.getThePromise = function(){
            return myPromise;
        };

        als.performLongCalculation = function(){

            $timeout(function(){
                myDeferredObject.resolve('Table is Ready');
            }, 3000);

            $timeout(function(){
                myDeferredObject.notify('Almost Done');
            }, 1500);

            return myPromise;
        }
    })
    .controller('formController', function($scope){
      var fc = this;


      $scope.$watch($scope.submitForm, function(n, o) {console.log('watch called')}, true)
  });
