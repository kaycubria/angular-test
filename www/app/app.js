angular.module('app', ['ngRoute', 'artCollectionModule', 'artDetailsModule']).config(function($routeProvider){
    $routeProvider.when('/artCollection', {
        templateUrl: '/app/artCollection/artCollection.html',
        controller: 'artCollectionController',
        controllerAs: 'acc',
        resolve: {
            artList: function(artListService){
                return artListService.getArtworks();
            }
        }
    }).when('/artDetails/:name', {
        templateUrl: '/app/artDetails/artDetails.html',
        controller: 'artDetailsController',
        controllerAs: 'adc'
    }).otherwise('/artCollection');
})