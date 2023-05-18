"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
var token = (_a = process.env.TELEGRAM_BOT_TOKEN) !== null && _a !== void 0 ? _a : "";
var bot = new node_telegram_bot_api_1.default(token, { polling: false });
exports.default = bot;
