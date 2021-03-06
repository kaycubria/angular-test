angular.module('artDetailsModule', [])
    .controller('artDetailsController', function($scope, $location, artList, artListService) {
      var acc = this;

      acc.artworks = artList;

        artListService.getCombinedPromise().then(function(data){
            acc.message = data;
        });


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

        als.getCombinedPromise = function(){
            return $q.all([myPromise, myHttpPromise]).then(function(resolutionArray){
                console.log('finished all of the promise')
            });
        };

        als.getThePromise = function(){
            return myPromise;
        };


    })
    .controller('formController', function($scope){
      var fc = this;

  });