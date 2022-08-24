import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const DAYS: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

async function main() {
	DAYS.map(async (day, index) => {
		await prisma.dayOfTheWeek.create({
			data: {
				day,
				orderInWeek: index,
			},
		});
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
