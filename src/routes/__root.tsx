/// <reference types="vite/client" />
import * as React from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { seo } from "@/utils/seo";

import "@/styles/globals.css";

const RootDocument = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <HeadContent />
    </head>
    <body>
      {/* <React.Suspense fallback={null}>{children}</React.Suspense> */}
      {children}
      <TanStackRouterDevtools position="bottom-right" />
      <Scripts />
    </body>
  </html>
);

const RootComponent = () => (
  <RootDocument>
    <Outlet />
  </RootDocument>
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Reacture | Digital Atelier",
        description: `Reacture is a digital atelier that specializes in fullstack development. `,
      }),
    ],
    links: [
      { rel: "icon", href: "/light-favicon.png" },
      { rel: "icon", href: "/dark-favicon.png" },
    ],
  }),
  component: RootComponent,
});
