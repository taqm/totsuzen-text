"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZENREG = /[^\x01-\x7E\xA1-\xDF]/g;
function repeat(c, count) {
    var ret = '';
    for (var i = 0; i < count; i++) {
        ret += c;
    }
    return ret;
}
function default_1(text) {
    var lines = text.split(/\r?\n/)
        .map(function (ln) {
        var t = ln.trim();
        return {
            text: t,
            len: t.replace(ZENREG, 'aa').length + 2,
        };
    });
    var maxLen = lines.reduce(function (max, c) { return max < c.len ? c.len : max; }, 0);
    var ret = lines.map(function (ln) {
        var wk = ln.text;
        if (ln.len < maxLen) {
            var pad = (maxLen - ln.len) / 2;
            wk = repeat(' ', Math.floor(pad)) + wk;
            wk = wk + repeat(' ', Math.ceil(pad)); // 中央寄せの調整を行う
        }
        return wk.replace(/$/g, ' ＜').replace(/^/g, '＞ ');
    }).join('\n');
    var count = Math.floor(maxLen / 2);
    var header = "\uFF3F" + repeat('人', count) + "\uFF3F\n";
    var footer = "\n\uFFE3" + repeat('Ｙ', count) + "\uFFE3";
    return header + ret + footer;
}
exports.default = default_1;
