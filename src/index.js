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
const loader_1 = __importDefault(require("@koishijs/loader"));
const node_fs_1 = require("node:fs");
const satori_1 = require("@satorijs/satori");
const plugin_console_1 = __importDefault(require("@koishijs/plugin-console"));
const node_path_1 = require("node:path");
console.log("[KFS] Hello, World!");
const CONFIG = {
    port: 1145,
    host: '127.0.0.1',
    plugins: {
        // '@koishijs/console': {},
        'market': {},
        // 'k2345-security': {}
        // '@koishijs/plugin-console': {
        //     open: true
        // }
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let loader = new loader_1.default();
        (0, node_fs_1.writeFileSync)("./config.json", JSON.stringify(CONFIG));
        yield loader.init('./config.json');
        loader.config = CONFIG;
        let app = yield loader.createApp();
        // Console
        app.plugin(satori_1.Router); // Console depends on this, remove this line will crash
        app.plugin(plugin_console_1.default, { root: (0, node_path_1.resolve)(__dirname, '../client/') });
        // app.console.addEntry({dev})
        yield app.start();
    });
}
main();
