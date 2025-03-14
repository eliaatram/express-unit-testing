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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const health_controller_1 = require("../controllers/health.controller");
const router = express_1.default.Router();
router.get('/sync', (_req, res) => {
    const result = (0, health_controller_1.healthCheckSync)();
    res.json({
        health: result,
        status: 200
    });
});
router.get('/async', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, health_controller_1.healthCheckAsync)();
    res.json({
        health: result,
        status: 200
    });
}));
exports.default = router;
//# sourceMappingURL=health.route.js.map