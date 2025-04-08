"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const health_route_1 = __importDefault(require("./routes/health.route"));
const item_route_1 = __importDefault(require("./routes/item.route"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    res.json({
        status: true
    });
});
app.use('/health', health_route_1.default);
app.use('/item', item_route_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map