"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IndexViewCtrl = (function () {
    function IndexViewCtrl(UserSessionSvc, FLAGS) {
        _classCallCheck(this, IndexViewCtrl);

        this.FLAGS = FLAGS;
        this.isLoggedIn = false;
    }

    _createClass(IndexViewCtrl, [{
        key: "test",
        value: function test() {
            console.dir(this);
        }
    }]);

    return IndexViewCtrl;
})();

var v = new IndexViewCtrl();
v.test();

var service = {
    doSomeThing: function doSomeThing(fn) {
        fn();
    }
};
service.doSomeThing(v.test);
