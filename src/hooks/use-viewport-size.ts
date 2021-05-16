import { useState } from "@hydrophobefireman/ui-lib";
import { useMount } from "./use-mount";

const getDimensions = (): [number, number] => [
  window.innerHeight,
  window.innerWidth,
];
export function useViewportSize(): [number, number] {
  const [dimensions, setDimensions] = useState(getDimensions);
  useMount(() => {
    const callback = () => setDimensions(getDimensions);
    addEventListener("resize", callback, { passive: true });
    return () => removeEventListener("resize", callback);
  });

  return dimensions;
}
