angular.module('artDetailsModule', [])
    .controller('artDetailsController', function($routeParams, artListService){
        var adc = this;
        artListService.getArtworks().then(function(data){
           adc.list = data;
        }, function(error){

        });
        artListService.getArt($routeParams.name).then(function(product){
            adc.product = product;
        });
    });