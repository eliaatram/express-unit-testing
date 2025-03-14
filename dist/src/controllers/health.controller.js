"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckAsync = exports.healthCheckSync = void 0;
const healthCheckSync = () => ('OK');
exports.healthCheckSync = healthCheckSync;
const healthCheckAsync = () => {
    return Promise.resolve('OK');
};
exports.healthCheckAsync = healthCheckAsync;
//# sourceMappingURL=health.controller.js.map