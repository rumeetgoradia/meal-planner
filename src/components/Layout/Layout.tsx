import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

type LayoutProps = {
	title?: string;
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<NextSeo title={title} />
			<Container
				maxW="container.md"
				pt={{ base: 20, sm: 24 }}
				pb={10}
				minH={{
					base: "calc(100vh - 26px)",
					sm: "calc(100vh - 26px)",
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default Layout;
