import {Context} from "@satorijs/satori";

export * from '@satorijs/core'

export type SPlugin = Plugin1<Context1.Configured<Context>>
export type SConfig<C = SPlugin> = Plugin.Config<C>

declare module '@satorijs/core' {
    namespace Context {
        export type Configured<C, T = any> = Omit<C, 'config'> & {
            config: T;
        }
    }
}

export type Plugin<C extends Context = Context> = Plugin.Function<any, C> | Plugin.Constructor<any, C> | Plugin.Object<any, any, C>;
export namespace Plugin {
    type Function<T = any, C extends Context = any> = (ctx: C, options: T) => void;
    type Constructor<T = any, C extends Context = any> = new (ctx: C, options: T) => void;
    interface Object<S = any, T = any, C extends Context = any> {
        name?: string;
        apply: Function<T, C>;
        reactive?: boolean;
        reusable?: boolean;
        Config?: (config?: S) => T;
        schema?: (config?: S) => T;
        using?: readonly string[];
    }
    type Config<T extends Plugin<any>> = T extends Constructor<infer U> ? U : T extends Function<infer U> ? U : T extends Object<infer U> ? U : never;
}