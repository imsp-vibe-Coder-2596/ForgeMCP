import type { ExecutionContext } from "../context";
import type { MaybePromise } from "../types";
import type { ToolMetadata } from "./tool-metadata";
import type { ToolResult } from "./tool-result";

/**
 * Represents executable business capability.
 */
export interface Tool<
  TInput = unknown,
  TResult = unknown
> {
  /**
   * Tool metadata.
   */
  readonly metadata: ToolMetadata;

  /**
   * Executes the tool.
   */
  execute(
    context: ExecutionContext,
    input: TInput
  ): MaybePromise<ToolResult<TResult>>;
}