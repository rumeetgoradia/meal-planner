// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { daysRouter } from "./days";

export const appRouter = createRouter()
	.transformer(superjson)
	.merge("days.", daysRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
