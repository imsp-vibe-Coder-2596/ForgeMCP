import type { ExecutionContext } from "../context/execution-context.js";
import type { Next } from "./next.js";

/**
 * Represents a middleware component in the execution pipeline.
 *
 * Middleware can inspect, modify, or short-circuit a request before
 * passing control to the next middleware or the target tool.
 */
export interface Middleware {
  /**
   * Invokes the middleware.
   *
   * @param context The current execution context.
   * @param next Delegate that invokes the next middleware in the pipeline.
   */
  invoke(
    context: ExecutionContext,
    next: Next,
  ): Promise<void>;
}