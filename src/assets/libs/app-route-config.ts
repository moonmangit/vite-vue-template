import type { RouteRecordRaw } from "vue-router";
import Layouts from "../../view/layouts";

export type AppRouteConfig =
  | RouteRecordRaw
  | {
      meta?: {
        layout?: keyof typeof Layouts;
      };
    };
