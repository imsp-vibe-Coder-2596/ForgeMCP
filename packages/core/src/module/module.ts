import type { Constructor } from "../types/index.js";

/**
 * Marker interface for ForgeMCP modules.
 */
export interface Module {}

/**
 * Constructor type for modules.
 */
export type ModuleConstructor = Constructor<Module>;