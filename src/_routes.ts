import {dynamic} from "@kit/router";
export default {
  "/": dynamic(() => import("@/pages/Landing")),
} as Record<string, (props: any) => JSX.Element>;
