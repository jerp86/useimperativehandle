import { Button, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";
import { useCallback } from "react";

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
  const PreviousButton = useCallback(
    () => (
      <Button
        onClick={() => {}}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        left={0}
        // disabled={hasNextPage}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chevron_left_font_awesome.svg/30px-Chevron_left_font_awesome.svg.png"
          alt="Previous icon"
          width="30px"
        />
      </Button>
    ),
    []
  );

  const NextButton = useCallback(
    () => (
      <Button
        onClick={() => {}}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        right={0}
        // disabled={!hasNextPage}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chevron_right_font_awesome.svg/30px-Chevron_right_font_awesome.svg.png"
          alt="Next icon"
          width="30px"
        />
      </Button>
    ),
    []
  );

  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Flex flexDirection="column" width="xl">
          <Profile />

          <Text
            marginTop={8}
            marginBottom={4}
            fontSize="2xl"
            fontWeight="semibold"
          >
            Tech Stack
          </Text>

          <Gallery
            images={images}
            customNextButton={<NextButton />}
            customPreviousButton={<PreviousButton />}
          />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
