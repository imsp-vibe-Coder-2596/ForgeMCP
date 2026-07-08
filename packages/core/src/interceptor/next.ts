import type { ExecutionContext } from "../context/index.js";
import type { MaybePromise } from "../types/index.js";
import type { ToolResult } from "../tool/index.js";

/**
 * Represents the next step in the execution pipeline.
 */
export interface Next<TInput = unknown, TResult = unknown> {
  invoke(
    context: ExecutionContext,
    input: TInput
  ): MaybePromise<ToolResult<TResult>>;
}