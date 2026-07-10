import type { ModuleType } from "../module/index.js";
import { MaybePromise } from "../types/maybe-promise.js";
import { Application } from "./application.js";

export interface ApplicationBuilder {
  use(module: ModuleType): this;

  build(): MaybePromise<Application>;
}