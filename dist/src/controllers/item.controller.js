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
exports.readItem = exports.updateItemHash = exports.createItem = void 0;
const Item_model_1 = __importDefault(require("../models/Item.model"));
const nanoid_1 = require("nanoid");
const createItem = function (itemObj) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!itemObj || !itemObj.name || !itemObj.rating || !itemObj.price || !itemObj.hash) {
                throw new Error('Invalid arguments');
            }
            const { name, rating, price, hash } = itemObj;
            let item = new Item_model_1.default({
                name,
                rating,
                price,
                hash
            });
            return yield item.save();
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
};
exports.createItem = createItem;
const updateItemHash = function (hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!hash) {
                throw new Error('Incomplete arguments');
            }
            let item = yield Item_model_1.default.findOne({
                hash
            });
            item.hash = getUniqueHash(item);
            return yield item.save();
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
};
exports.updateItemHash = updateItemHash;
const readItem = function (hash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!hash) {
                throw new Error('Invalid item id');
            }
            return yield Item_model_1.default.findOne({
                hash
            });
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
};
exports.readItem = readItem;
function getUniqueHash(item) {
    if (!item)
        return null;
    const currentHash = item.hash;
    let newHash = (0, nanoid_1.nanoid)(10);
    while (newHash === currentHash) {
        newHash = (0, nanoid_1.nanoid)(10);
    }
    return newHash;
}
//# sourceMappingURL=item.controller.js.map