import { Layout } from "@/components/Layout";
import { SignInRequired } from "@/components/SignInRequired";
import { trpc } from "@/utils/trpc";
import { Box, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
	const { status } = useSession();

	const { data, isLoading } = trpc.useQuery(["days.getDays"]);

	return (
		<Layout>
			{status !== "authenticated" ? (
				<SignInRequired />
			) : (
				<VStack spacing={8} align="flex-start">
					<Box>
						<Heading as="h2">Meal Plan</Heading>
					</Box>
					<Box>
						<Heading as="h2">Shopping List</Heading>
					</Box>
					<Box>
						<Heading as="h2">Recipes</Heading>
					</Box>
				</VStack>
			)}
		</Layout>
	);
};

export default Home;
