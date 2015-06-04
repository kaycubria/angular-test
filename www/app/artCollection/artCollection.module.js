angular.module('artCollectionModule', [])
    .controller('artCollectionController', function($scope, $location, artListService) {
      var acc = this;
      acc.sortCriteria;
      acc.personObject = {};
      acc.personObject.name = 'Bob';
      acc.sortCriteria = {};
      artListService.getArt().then(function(data){
            acc.artworks = data;
        });
      acc.searchUpdated = function() {
            console.log('input value changed');
          };
      acc.goToDetails = function(artworks){
      console.log('clicked');
      $location.url('/productDetail/' + artwork);
    }
  })
.service('artListService', function($http){
        var als = this;

        als.getArt = function(){
            var myPromise = $http.get('data/artworks.json').then(function(response){
                return response.data;
            });

            return myPromise;

        };

        als.getArtworks = function(name){
            return $http.get('data/artworks.json').then(function(response){
                var returnArtwork;
                angular.forEach(response.data, function(artwork){
                    if(artwork.name === name){
                        returnArtwork = artwork;
                    }
                });
                return returnArtwork;
            });
        }

    })
    .controller('formController', function($scope){
      var fc = this;


      $scope.$watch($scope.submitForm, function(n, o) {console.log('watch called')}, true)
  });
