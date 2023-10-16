import {Context} from "cordis";
import {Context as Context1} from '@koishijs/core'
import NodeLoader from "@koishijs/loader";
import {writeFileSync} from "node:fs";

const DEFAULT_CONFIG: Context1.Config = {
    plugins: {},
}

export async function createApp(config: Context.Config = DEFAULT_CONFIG) {
    let loader = new NodeLoader()

    writeFileSync("./config.json", JSON.stringify(config))

    await loader.init('./config.json')

    loader.config = config

    return await loader.createApp()
}