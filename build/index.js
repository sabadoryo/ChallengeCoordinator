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
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var day_1 = __importDefault(require("./day"));
var app = (0, express_1.default)();
var port = 3000;
dotenv_1.default.config();
var dayModel = new day_1.default();
var START_DATE = new Date("05 18 2023");
app.get('/', function (req, res) {
    console.log(req);
    res.send('CHALLENGER COORDINATOR');
});
app.post('/gym-attended', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var curDate, diffTime, day;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                curDate = new Date();
                diffTime = Math.abs(curDate.getMilliseconds() - START_DATE.getMilliseconds());
                day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return [4 /*yield*/, dayModel.upsertDay(day, {
                        is_gym_attended: true,
                        gym_attended_at: new Date(),
                    })];
            case 1:
                _a.sent();
                res.send('GYM ATTENDED');
                return [2 /*return*/];
        }
    });
}); });
app.post('/office-attended', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var curDate, diffTime, day;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                curDate = new Date();
                diffTime = Math.abs(curDate.getMilliseconds() - START_DATE.getMilliseconds());
                day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return [4 /*yield*/, dayModel.upsertDay(day, {
                        is_office_attended: true,
                        office_attended_at: new Date(),
                    })];
            case 1:
                _a.sent();
                res.send('ACCEPTED');
                return [2 /*return*/];
        }
    });
}); });
app.post('/game-was-opened', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var curDate, diffTime, day;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                curDate = new Date();
                diffTime = Math.abs(curDate.getMilliseconds() - START_DATE.getMilliseconds());
                day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return [4 /*yield*/, dayModel.upsertDay(day, {
                        is_office_attended: true,
                        office_attended_at: new Date(),
                    })];
            case 1:
                _a.sent();
                res.send('ACCEPTED');
                return [2 /*return*/];
        }
    });
}); });
app.post("/wake-up", function (req, res) {
    console.log("WOKE UP");
    res.send('ACCEPTED');
});
app.post("/sleep-down", function (req, res) {
    console.log("SLEEP DOWN");
    res.send('ACCEPTED');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
