import type { MaybePromise } from "../types";
import type { ModuleBuilder } from "./module-builder";
import type { ModuleMetadata } from "./module-metadata";

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