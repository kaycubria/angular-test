angular.module( 'directives', [] )
.directive( 'abcBanner', function(){
  return {
    restrict: 'EA',
    templateUrl: 'app/directives/banner.directive.html'
  }
}).directive( 'abcArtDetail', function(){
  return {
    restrict: 'AE',
    templateUrl: 'app/directives/artDetail.directive.html'
  }
});
