angular.module('app', ['ngRoute', 'artCollectionModule', 'artDetailsModule']).config(function($routeProvider){
    $routeProvider.when('/artCollection', {
        templateUrl: '/app/artCollection/artCollection.html',
        controller: 'artCollectionController',
        controllerAs: 'acc'
    }).when('/artDetails/:name', {
        templateUrl: '/app/artDetails/artDetails.html',
        controller: 'artDetailsController',
        controllerAs: 'adc'
    }).otherwise('/artCollection');
})