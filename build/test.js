System.register("test", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      Test;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      Test = function() {
        function Test() {
          console.info('Test Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(Test, {}, {});
      }();
      $__export("Test", Test);
      Object.defineProperty(Test, "annotations", {get: function() {
          return [new Component({selector: 'test'}), new View({templateUrl: 'test.html'})];
        }});
    }
  };
});
