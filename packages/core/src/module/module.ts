import type { MaybePromise } from "../types/maybe-promise.js";
import type { ModuleBuilder } from "../module/module-builder.js";
import type { ModuleMetadata } from "../module/module-metadata.js";

/**
 * Represents a Forge module.
 */
export interface Module {

  /**
   * Module information.
   */
  readonly metadata: ModuleMetadata;

  /**
   * Configures the module.
   */
  configure(
      builder: ModuleBuilder
  ): MaybePromise<void>;

}