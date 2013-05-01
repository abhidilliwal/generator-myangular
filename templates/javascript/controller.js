(function (){
'use strict';


/**
 * [write description]
 * @author: [author_name]
 */
function <%= _.classify(name) %>Ctrl ($scope) {
    // TODO: change the baseCtrl name
    BaseCtrlr.apply(this, arguments);

    // your code here.
}

// TODO: change the baseCtrl name
<%= _.classify(name) %>Ctrl.prototype = new BaseCtrl();
<%= _.classify(name) %>Ctrl.prototype.constructor = <%= _.classify(name) %>Ctrl;

<%= _.classify(name) %>Ctrl.prototype.doSomething = function () {
    // do some kool stuff
};

angular.module('<%= _.camelize(appname) %>App')
  .controller('<%= _.classify(name) %>Ctrl', ['$scope', <%= _.classify(name) %>Ctrl]);

})();
