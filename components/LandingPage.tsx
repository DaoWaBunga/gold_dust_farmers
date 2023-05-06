import React from "react";
import { Box, Button, Heading, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleEnterDApp = () => {
    router.push("/dapp");
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="black"
      backgroundImage="url('/background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Heading
        as="h1"
        fontSize={["4xl", "5xl", "6xl"]}
        fontWeight="bold"
        color="black"
        fontFamily="fantasy"
        mb="40px"
      >
        Welcome to the Gold Dust Farms
      </Heading>
      <Button colorScheme="red" onClick={handleEnterDApp}>
        Enter dApp
      </Button>
    </Flex>
  );
};

export default LandingPage;
