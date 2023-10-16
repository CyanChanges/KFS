export function console(ctx, config) {
    ctx.plugin(require("@satorijs/satori").Router)
    ctx.plugin(require("@koishijs/plugin-console").default, config)
}

export function market(ctx, config) {
    ctx.plugin(require("@koishijs/plugin-market"), config)
}

export function insight(ctx, config) {
    ctx.plugin(require("@koishijs/plugin-insight"), config)
}

export function config(ctx, config) {
    ctx.plugin(require("@koishijs/plugin-config"), config)
}