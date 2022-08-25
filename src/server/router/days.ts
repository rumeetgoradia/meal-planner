import { createProtectedRouter } from "./protected-router";

// Example router with queries that can only be hit if the user requesting is signed in
export const daysRouter = createProtectedRouter().query("getDays", {
	async resolve({ ctx }) {
		const days = await ctx.prisma.dayOfTheWeek.findMany({
			orderBy: {
				orderInWeek: "asc",
			},
		});

		return days;
	},
});
