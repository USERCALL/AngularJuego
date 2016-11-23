'use strict';

describe('Controller: FlappyCtrl', function () {

  // load the controller's module
  beforeEach(module('appGameApp'));

  var FlappyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlappyCtrl = $controller('FlappyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlappyCtrl.awesomeThings.length).toBe(3);
  });
});
