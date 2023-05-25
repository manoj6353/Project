"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.__esModule = true;
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.fetchCountry = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // console.log(req);
                        console.log('==========', req.user);
                        return [4 /*yield*/, this.userService.fetchCountry()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data }];
                }
            });
        });
    };
    UserController.prototype.fetchState = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.fetchState(+id)];
                    case 1:
                        state = _a.sent();
                        return [2 /*return*/, { state: state }];
                }
            });
        });
    };
    UserController.prototype.fetchCity = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.fetchCity(+id)];
                    case 1:
                        city = _a.sent();
                        return [2 /*return*/, { city: city }];
                }
            });
        });
    };
    // @Redirect('/')
    UserController.prototype.create = function (createUserDto) {
        return this.userService.create(createUserDto);
    };
    UserController.prototype.findAll = function () {
        return this.userService.findAll();
    };
    UserController.prototype.login = function (createUserDto) {
        return this.userService.login(createUserDto);
    };
    UserController.prototype.findOne = function (id) {
        // return this.userService.findOne(+id);
    };
    UserController.prototype.update = function (id, updateUserDto) {
        return this.userService.update(+id, updateUserDto);
    };
    UserController.prototype.remove = function (id) {
        return this.userService.remove(+id);
    };
    __decorate([
        (0, common_1.Get)('/index'),
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Render)('registration'),
        __param(0, (0, common_1.Req)())
    ], UserController.prototype, "fetchCountry");
    __decorate([
        (0, common_1.Get)('fetch-state/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserController.prototype, "fetchState");
    __decorate([
        (0, common_1.Get)('fetch-city/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserController.prototype, "fetchCity");
    __decorate([
        (0, common_1.Post)()
        // @Redirect('/')
        ,
        __param(0, (0, common_1.Body)())
    ], UserController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        (0, swagger_1.ApiBearerAuth)()
    ], UserController.prototype, "findAll");
    __decorate([
        (0, common_1.Post)('/login'),
        __param(0, (0, common_1.Body)())
    ], UserController.prototype, "login");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UserController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserController.prototype, "remove");
    UserController = __decorate([
        (0, common_1.Controller)('user'),
        (0, swagger_1.ApiTags)('users')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
