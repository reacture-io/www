import { hydrateRoot } from "react-dom/client";
import { i18n } from "@lingui/core";
import { StartClient } from "@tanstack/react-start";

import { dynamicActivate } from "./modules/lingui/i18n";
import { createRouter } from "./router";

// The lang should be set by the server
// eslint-disable-next-line @typescript-eslint/no-floating-promises
dynamicActivate(document.documentElement.lang);

const router = createRouter({ i18n });

hydrateRoot(document, <StartClient router={router} />);
