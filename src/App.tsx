import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

import Profile from "./component/Profile";

function App() {
  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Flex flexDirection="column">
          <Profile />

          <Text
            marginTop={8}
            marginBottom={4}
            fontSize="2xl"
            fontWeight="semibold"
          >
            Tech Stack
          </Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
