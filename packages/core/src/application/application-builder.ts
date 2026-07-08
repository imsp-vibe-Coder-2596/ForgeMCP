import type { ModuleType } from "../module/index.js";

export interface ApplicationBuilder {
  use(module: ModuleType): this;

  build(): MaybePromise<Application>;
}