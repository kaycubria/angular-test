angular.module( 'directives', [] )
.directive( 'abcBanner', function(){
  return {
    restrict: 'EA',
    templateUrl: 'app/directives/banner.directive.html'
  }
}).directive( 'abcArtDetails', function(){
  return {
    restrict: 'AE',
    templateUrl: 'app/directives/artDetails.directive.html'
    }
}).directive( 'abcLink',
  function(scope, element, attributes) {
});
