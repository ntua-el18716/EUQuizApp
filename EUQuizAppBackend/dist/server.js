"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.get("/", (req, res) => {
//   return res.json({
//     status: "success!!!",
//   });
// });
app.use("/", router_1.default);
app.listen(port, () => {
    console.log("TypeScript with Express starsted at http:localhost:3000");
});
exports.default = app;
