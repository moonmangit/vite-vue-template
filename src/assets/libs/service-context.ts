import type axios from "axios";

export type ServiceContext = {
  base: ReturnType<typeof axios.create>;
};
