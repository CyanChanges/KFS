import {Context} from "cordis";
import {SConfig} from "./satori";

export function console<S = typeof import("@koishijs/plugin-console").default>(ctx: Context, config: SConfig<S>)

export function market<S = typeof import("@koishijs/plugin-market")>(ctx: Context, config: SConfig<S>)

export function insight<S = typeof import("@koishijs/plugin-insight")>(ctx: Context, config: SConfig<S>)

export function config<S = typeof import("@koishijs/plugin-config")>(ctx: Context, config: SConfig<S>)
