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
const item_controller_1 = require("../controllers/item.controller");
const router = express_1.default.Router();
router.get('/:hash', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hash } = req.params;
        const item = yield (0, item_controller_1.readItem)(hash);
        res.json({
            item,
            status: 200,
            message: 'Item read successfully!'
        });
    }
    catch (err) {
        res.json({
            item: null,
            status: err.code || err.statusCode || 500,
            message: err.message || 'Something went wrong while reading item from DB!'
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, rating, price, hash } = req.body;
        const item = yield (0, item_controller_1.createItem)({
            name,
            rating,
            price,
            hash
        });
        res.json({
            item,
            status: 200,
            message: 'Item created successfully!'
        });
    }
    catch (err) {
        res.json({
            item: null,
            status: err.code || err.statusCode || 500,
            message: err.message || 'Something went wrong while creating new item!'
        });
    }
}));
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hash } = req.body;
        const item = yield (0, item_controller_1.updateItemHash)(hash);
        res.json({
            item,
            status: 200,
            message: 'Item updated successfully!'
        });
    }
    catch (err) {
        res.json({
            item: null,
            status: err.code || err.statusCode || 500,
            message: err.message || 'Something went wrong while updating item hash!'
        });
    }
}));
exports.default = router;
//# sourceMappingURL=item.route.js.map