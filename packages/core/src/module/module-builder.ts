import type { Tool } from "../tool";
import type { Middleware } from "../middleware";

/**
 * Collects contributions made by a module.
 */
export interface ModuleBuilder {

  /**
   * Registers a tool.
   */
  tool(tool: Tool): this;

  /**
   * Registers middleware.
   */
  middleware(middleware: Middleware): this;

}