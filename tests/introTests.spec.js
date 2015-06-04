describe("my artCollectionController", function(){
  var scope;
  beforeEach(module('app.artCollectionModule'));
  beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();

      $controller('artCollectionController as acc', {$scope: scope});
  }));
  it('should set default values', function(){
    expect(scope.acc.personObject.name).toBe('Bob');
    expect(scope.acc.artworks[0].artist).toBe("Henri Matisse")
  });

});