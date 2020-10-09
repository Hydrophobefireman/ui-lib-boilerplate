import {
  useState,
  Router,
  useEffect,
  RouterSubscription,
} from "@hydrophobefireman/ui-lib";

function useMount(fn) {
  return useEffect(fn, []);
}

const getPath = () => Router.path;
export const useLocation = () => {
  const [loc, setLoc] = useState(getPath);
  useMount(() => {
    const current = () => setLoc(getPath);
    RouterSubscription.subscribe(current);
    return () => RouterSubscription.unsubscribe(current);
  });
  return loc;
};

const getDimensions = () => [window.innerHeight, window.innerWidth];
export function useViewportSize() {
  const [dimensions, setDimensions] = useState(getDimensions);
  useMount(() => {
    const callback = () => setDimensions(getDimensions);
    addEventListener("resize", callback);
    return () => removeEventListener("resize", callback);
  });

  return dimensions;
}
