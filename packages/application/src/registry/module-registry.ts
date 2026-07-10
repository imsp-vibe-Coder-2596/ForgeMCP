import type { ModuleConstructor } from "@forgemcp/core";

/**
 * Stores all modules registered with the application.
 *
 * The registry is responsible for maintaining the collection
 * of application modules. Future versions will also manage
 * module instances and dependency relationships.
 */
export class ModuleRegistry {
  private readonly modules = new Set<ModuleConstructor>();

  /**
   * Registers a module.
   *
   * Duplicate registrations are ignored.
   *
   * @param module Module constructor.
   */
  public register(module: ModuleConstructor): void {
    this.modules.add(module);
  }

  /**
   * Determines whether a module has been registered.
   *
   * @param module Module constructor.
   * @returns True if the module exists.
   */
  public has(module: ModuleConstructor): boolean {
    return this.modules.has(module);
  }

  /**
   * Returns every registered module.
   */
  public getAll(): readonly ModuleConstructor[] {
    return [...this.modules];
  }

  /**
   * Returns the number of registered modules.
   */
  public get size(): number {
    return this.modules.size;
  }
}