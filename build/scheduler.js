"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_cron_1 = __importDefault(require("node-cron"));
exports.initScheduledJobs = function () {
    var scheduledJobFunction = node_cron_1.default.schedule("*/5 * * * *", function () {
        console.log("I'm executed on a schedule!");
    });
    scheduledJobFunction.start();
};
