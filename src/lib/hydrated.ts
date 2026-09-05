import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True only after client hydration — use to skip WebGL on the server. */
export function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
