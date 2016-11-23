'use strict';

describe('Controller: PursuitCtrl', function () {

  // load the controller's module
  beforeEach(module('appGameApp'));

  var PursuitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PursuitCtrl = $controller('PursuitCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PursuitCtrl.awesomeThings.length).toBe(3);
  });
});
