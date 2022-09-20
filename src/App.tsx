import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

import Gallery from "./component/Gallery";
import Profile from "./component/Profile";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GrapQL_Logo.svg.png",
  },
  {
    src: "https://relay.dev/img/relay.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    src: "https://relay.dev/img/relay.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GrapQL_Logo.svg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
];

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

          <Gallery images={images} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
