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
exports.createApp = void 0;
const loader_1 = __importDefault(require("@koishijs/loader"));
const node_fs_1 = require("node:fs");
const DEFAULT_CONFIG = {
    plugins: {},
};
function createApp(config = DEFAULT_CONFIG) {
    return __awaiter(this, void 0, void 0, function* () {
        let loader = new loader_1.default();
        (0, node_fs_1.writeFileSync)("./config.json", JSON.stringify(config));
        yield loader.init('./config.json');
        loader.config = config;
        return yield loader.createApp();
    });
}
exports.createApp = createApp;
