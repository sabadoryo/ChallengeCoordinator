"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initScheduledJobs = void 0;
var node_cron_1 = __importDefault(require("node-cron"));
var bot_1 = __importDefault(require("./bot"));
var day_1 = __importDefault(require("./day"));
var helpers_1 = require("./helpers");
var dayModel = new day_1.default();
var initScheduledJobs = function () {
    var scheduledJobFunction = node_cron_1.default.schedule("0 0 17 * * *", function () { return __awaiter(void 0, void 0, void 0, function () {
        var dayData, header, gameMessage, gymMessage, officeMessage, sleepMessage, hours, fapMessage, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dayModel.getDayByNumber((0, helpers_1.getDay)())];
                case 1:
                    dayData = _a.sent();
                    header = "\u0414\u0435\u043D\u044C ".concat((0, helpers_1.getDay)(), ".\n");
                    gameMessage = "";
                    if (dayData === null || dayData === void 0 ? void 0 : dayData.is_game_launched) {
                        gameMessage = "\uD83C\uDFAE\u274C \u0418\u0433\u0440\u0430 \u0431\u044B\u043B\u0430 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u044B: ".concat(dayData.game_name, ". \u0422\u0435\u043C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435, \u0438\u0433\u0440\u0430 \u0431\u044B\u043B\u0430 \u0441\u0440\u0430\u0437\u0443 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0430, <a href=\"https://github.com/sabadoryo/isGameLaunchedDetector/blob/588496c0f0ccad5c28cfa54ce35d8e5a456d31fb/index.js#LL31C1-L32C1\">\u043F\u0440\u0443\u0444\u044B.</a>");
                    }
                    else {
                        gameMessage = "🎮✅ Игры не были запущены.";
                    }
                    gymMessage = "";
                    if (dayData === null || dayData === void 0 ? void 0 : dayData.is_gym_attended) {
                        gymMessage = "🏋️‍♂️✅ Сегодня был поход в зал.";
                    }
                    else {
                        gymMessage = "🏋️‍♂️❌ Сегодня не было похода в зал.";
                    }
                    officeMessage = "";
                    if (dayData === null || dayData === void 0 ? void 0 : dayData.is_office_attended) {
                        officeMessage = "🏢✅ Сегодня он работал с офиса.";
                    }
                    else {
                        officeMessage = "🏢❌ Сегодня он работал из дома.";
                    }
                    sleepMessage = "";
                    if ((dayData === null || dayData === void 0 ? void 0 : dayData.sleep_end) && dayData.sleep_start) {
                        hours = Math.ceil(Math.abs(dayData.sleep_end.getMilliseconds() - dayData.sleep_start.getMilliseconds()) / 36e5);
                        if (hours === 8) {
                            sleepMessage = "\uD83D\uDCA4\u2705 \u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u043D\u0430 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F: ".concat(hours, " \u0447\u0430\u0441\u043E\u0432");
                        }
                        else {
                            sleepMessage = "\uD83D\uDCA4\u274C \u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u043D\u0430 \u0430\u043D\u043E\u043C\u0430\u043B\u044C\u043D\u0430\u044F: ".concat(hours, " \u0447\u0430\u0441\u043E\u0432");
                        }
                    }
                    else {
                        sleepMessage = "💤❓ Нету данных.";
                    }
                    fapMessage = "💦🍆 Нету данных.";
                    message = "".concat(header, "\n").concat(gameMessage, "\n").concat(gymMessage, "\n").concat(officeMessage, "\n").concat(sleepMessage, "\n").concat(fapMessage);
                    console.log(message);
                    return [4 /*yield*/, bot_1.default.sendMessage("-1001800091038", message, {
                            parse_mode: "HTML"
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    scheduledJobFunction.start();
};
exports.initScheduledJobs = initScheduledJobs;
