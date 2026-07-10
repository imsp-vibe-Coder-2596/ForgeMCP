import {
  type Application,
  LifecycleState,
  type ModuleType,
} from "@forgemcp/core";

/**
 * Default implementation of a Forge application.
 */
export class ForgeApplication implements Application {
  /**
   * Creates a new Forge application.
   */
  public constructor(
    private readonly modules: readonly ModuleType[],
  ) {}

  /**
   * Current lifecycle state.
   */
  public get state(): LifecycleState {
    return LifecycleState.Created;
  }

  /**
   * Starts the application.
   */
  public start(): void {
    throw new Error("Not implemented.");
  }

  /**
   * Stops the application.
   */
  public stop(): void {
    throw new Error("Not implemented.");
  }
}