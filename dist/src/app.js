"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
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
let mongoDB = process.env.MONGODB_URL || "mongodb://localhost:27017/express-api-unit-test-starter";
mongoose_1.default.connect(mongoDB, {});
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connection.on('error', console.error.bind(console, '❌❌❌ MongoDB Connection Error ❌❌❌'));
module.exports = app;
//# sourceMappingURL=app.js.map