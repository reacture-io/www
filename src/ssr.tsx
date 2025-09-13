import { i18n } from "@lingui/core";
import {
  createStartHandler,
  defaultStreamHandler,
  defineEventHandler,
} from "@tanstack/react-start/server";

import { createRouter } from "./router";

export default defineEventHandler(async (event) => {
  const startHandler = createStartHandler({
    createRouter: () => createRouter({ i18n }),
  })(defaultStreamHandler);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return startHandler({ request: event.node.req as any });
});
