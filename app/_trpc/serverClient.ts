import { type AppRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
