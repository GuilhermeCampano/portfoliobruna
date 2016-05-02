System.register("index", ["angular2/core", "angular2/platform/browser", "test"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      Test,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Test = $__m.Test;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Test],
            template: "\n    <test></test>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
