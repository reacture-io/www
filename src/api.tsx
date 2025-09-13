import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from "@tanstack/react-start/api";

import {
  defaultLocale,
  dynamicActivate,
  isLocaleValid,
} from "./modules/lingui/i18n";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default createStartAPIHandler(async (ctx: any) => {
  // Define the locale based on the Accept-Language header
  const headerLocale = ctx.request.headers.get("Accept-Language") ?? "";
  await dynamicActivate(
    isLocaleValid(headerLocale) ? headerLocale : defaultLocale
  );

  return defaultAPIFileRouteHandler(ctx);
});
