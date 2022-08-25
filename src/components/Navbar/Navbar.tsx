import { SITE_NAME } from "@/constants/seo";
import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	IconButton,
	Link as Anchor,
} from "@chakra-ui/react";
import fade from "color-alpha";
import { useColor } from "hooks/useColor";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { AccountPopover } from "./AccountPopover";

const Navbar: React.FC = ({}) => {
	const { status } = useSession();

	const backgroundColor = useColor("black");

	return (
		<Flex
			as="header"
			justify="center"
			w="full"
			borderBottom="1px"
			borderBottomColor="gray.700"
			position="fixed"
			zIndex="banner"
			top={0}
			left={0}
			bg={fade(backgroundColor, 0.9)}
			backdropFilter="saturate(180%) blur(5px)"
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
					bg: "black",
				},
			}}
		>
			<Container maxW="container.md" py={2}>
				<Flex
					justify={status === "authenticated" ? "space-between" : "center"}
					align="center"
					w="full"
				>
					<Link href="/" passHref>
						<Anchor
							fontWeight={300}
							title={SITE_NAME}
							fontSize={{ base: "2xl", sm: "3xl" }}
							textDecoration="none !important"
							_hover={{ transform: "scale(1.025)" }}
							_focusVisible={{ transform: "scale(1.025)" }}
							_active={{ transform: "scale(0.975)" }}
						>
							<Box as="span" color="brand.900">
								rg
							</Box>
							MealPlanner
						</Anchor>
					</Link>
					{status === "authenticated" && (
						<HStack spacing={{ base: 1, sm: 2 }}>
							<Box display={{ base: "none", sm: "block" }}>
								<Link href="/recipes/create" passHref>
									<Button
										as="a"
										leftIcon={<AiOutlinePlus />}
										title="Create a recipe"
										size={{ base: "sm", sm: "md" }}
									>
										Create a recipe
									</Button>
								</Link>
							</Box>
							<Box display={{ base: "block", sm: "none" }}>
								<Link href="/recipes/create" passHref>
									<IconButton
										as="a"
										icon={<AiOutlinePlus />}
										aria-label="Sign out"
										h={{ base: "32px", sm: "40px" }}
										w={{ base: "32px", sm: "40px" }}
										minW="none"
										fontSize="xl"
									/>
								</Link>
							</Box>
							<AccountPopover />
						</HStack>
					)}
				</Flex>
			</Container>
		</Flex>
	);
};

export default Navbar;
