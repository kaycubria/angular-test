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
  function() {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        console.info(scope, element, attributes);
        element.addClass( attributes.abcLink);
      }
    }
// })
// .directive('abcDupe', function() {
//   function linkingFunction(scope, element, attributes) {
//       var newElement = element.clone();
//       for( var i = 0)
//       element.after( newElement )
//   }
//   return {
//     restrict: 'A',
//     link: linkingFunction
//   }
});
