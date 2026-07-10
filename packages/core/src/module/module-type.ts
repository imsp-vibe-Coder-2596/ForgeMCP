import type { Constructor } from "../types/cosntructor.js";
import type { Module } from "./module.js";

/**
 * Represents a module class that can be instantiated by the runtime.
 */
export type ModuleType = Constructor<Module>;