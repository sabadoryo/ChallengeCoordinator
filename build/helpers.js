"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDay = void 0;
var getDay = function () {
    var _a;
    var curDate = new Date();
    var startDate = new Date((_a = process.env.START_DATE) !== null && _a !== void 0 ? _a : "05 18 2023");
    var diffTime = Math.abs(curDate.getMilliseconds() - startDate.getMilliseconds());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
exports.getDay = getDay;
