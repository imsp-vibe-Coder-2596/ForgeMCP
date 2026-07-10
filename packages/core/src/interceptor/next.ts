/**
 * Represents the next delegate in the execution pipeline.
 */
export type Next = () => Promise<void>;