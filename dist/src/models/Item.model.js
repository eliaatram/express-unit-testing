"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    hash: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
    },
});
exports.default = mongoose_1.default.model('Item', itemSchema);
//# sourceMappingURL=Item.model.js.map