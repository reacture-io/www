import type { PropsWithChildren } from "react";
import type { I18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { NotFound } from "@/components/not-found";

import { routeTree } from "./routeTree.gen";

export function createRouter({ i18n }: { i18n: I18n }) {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Wrap: ({ children }: PropsWithChildren) => (
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
    ),
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
