import { Button, Container, Flex, Heading, Spinner } from "@chakra-ui/react";
import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";

const Home: NextPage = () => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<Container maxW="container.md" h="100vh">
				<Flex w="full" h="full" justify="center" align="center">
					<Spinner size="xl" />
				</Flex>
			</Container>
		);
	}

	if (status === "unauthenticated") {
		return (
			<Container maxW="container.md" h="100vh">
				<Flex w="full" h="full" justify="center" align="center">
					<Button onClick={() => signIn("github")}>Sign In</Button>
				</Flex>
			</Container>
		);
	}

	return <Heading>Good morning Baltimore!</Heading>;
};

export default Home;
