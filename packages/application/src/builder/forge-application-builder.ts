import type {
  Application,
  ApplicationBuilder,
  ModuleType,
} from "@forgemcp/core";

import { ForgeApplication } from "../runtime/forge-application.js";

/**
 * Default implementation of the Forge application builder.
 */
export class ForgeApplicationBuilder implements ApplicationBuilder {
  /**
   * Registered module types.
   */
  private readonly modules: ModuleType[] = [];

  /**
   * Prevent direct instantiation.
   */
  private constructor() {}

  /**
   * Creates a new application builder.
   */
  public static create(): ForgeApplicationBuilder {
    return new ForgeApplicationBuilder();
  }

  /**
   * Registers a module.
   */
  public use(module: ModuleType): this {
    if (this.modules.includes(module)) {
      throw new Error(
        `Module '${module.name}' is already registered.`,
      );
    }

    this.modules.push(module);

    return this;
  }

  /**
   * Builds the application.
   */
  public build(): Application {
    return new ForgeApplication([...this.modules]);
  }
}