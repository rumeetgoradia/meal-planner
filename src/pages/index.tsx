import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const { data, isLoading } = trpc.useQuery([
		"example.hello",
		{ text: "from tRPC" },
	]);

	return <Heading>Good morning Baltimore!</Heading>;
};

export default Home;
