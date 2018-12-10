"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
function default_1(target, prop, desc) {
    var original = desc.value;
    desc.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var res = original.apply(this, args);
        if (typeof (res) !== 'string')
            return res;
        return _1.default(res);
    };
}
exports.default = default_1;
