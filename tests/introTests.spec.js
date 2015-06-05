describe("My Application", function(){
  beforeEach(module('app'));

  describe("my art services", function(){
    var $httpBackend;
    var artListService;

    beforeEach(inject(function(_artListService_, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      artListService = _artListService_;
      $httpBackend.when("GET", "data/artworks.json").respond([
        {
          "name": "mockPiece",
          "description": "mockDescription",
          "artist": "mackPainter"
        }
      ]);
    }));

    it("should fetch the paitings", function(){
      $httpBackend.expectGET('data/artworks.json');
      artListService.getArtworks().then(function(data){
        expect(data[0].name).toBe("mockPiece")
      });
      $httpBackend.flush();
    })
  });

  describe("my artCollectionController", function(){
    var scope;
    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();

        artList = [{
          name: "Room in Nice",
          artist: "Henri Matisse",
          description: "Nice",
          imageurl: "http://xyz.com"
        }];

        $controller('artCollectionController as acc', {$scope: scope, artList: artList});
    }));

    it('should set default values', function(){
      expect(scope.acc.personObject.name).toBe('Bob');
      expect(scope.acc.artworks[0].artist).toBe("Henri Matisse")
    });

    it('should include a link', function(){
      expect(scope.acc.artworks[0].imageurl).toMatch(/\http.*/);
    });

  });
})
