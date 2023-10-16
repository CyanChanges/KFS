import {createApp} from "./app";
import {config, console, market} from './plugins/webui.js'

createApp().then((app) => {
    app.plugin(console)
    app.plugin(market)
    app.plugin(config)
})

