import { Layout } from "@/components/Layout";
import { Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<Layout>
				<Flex w="full" h="full" justify="center" align="center">
					<Spinner size="xl" />
				</Flex>
			</Layout>
		);
	}

	if (status === "unauthenticated") {
		return (
			<Layout>
				<Flex w="full" h="full" justify="center" align="center">
					<Button onClick={() => signIn("github")}>Sign In</Button>
				</Flex>
			</Layout>
		);
	}

	return (
		<Layout>
			<Heading>Good morning Baltimore!</Heading>
		</Layout>
	);
};

export default Home;
