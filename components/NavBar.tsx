import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>Gold Dust Farms</Heading>
                <Flex alignItems={"center"}>
                    <Link href={"/"} mx={2}>Home</Link>
                    <Link href={"/dapp"} mx={2}>Farm</Link>
                    <Link href={"/shop"} mx={2}>Shop</Link>
                </Flex>
                <ConnectWallet/>
            </Flex>
        </Container>
    )
};