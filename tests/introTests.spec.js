describe("My Application", function(){
  beforeEach(module('app'));

  describe("my art services", function(){

  });

  describe("my artCollectionController", function(){
    var scope;
    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();

        artList = [{
          name: "Room in Nice",
          artist: "Henri Matisse",
          description: "Nice"
        }];

        $controller('artCollectionController as acc', {$scope: scope, artList: artList});
    }));

    it('should set default values', function(){
      expect(scope.acc.personObject.name).toBe('Bob');
      expect(scope.acc.artworks[0].artist).toBe("Henri Matisse")
    });

  });
})
