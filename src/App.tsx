import { Button, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";
import { useCallback, useRef } from "react";

import Gallery, { GalleryRefType } from "./component/Gallery";
import Profile from "./component/Profile";

const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Progressive_Web_Apps_Logo.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/320px-Redux_Logo.png",
  },
  {
    src: "https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg",
  },
  {
    src: "https://camo.githubusercontent.com/973c99d17e4ce72d08c4433449045d8391948711f11ac5f328a585e2a7bc8663/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67",
  },
];

function App() {
  const galleryRef = useRef<GalleryRefType>(null);

  const PreviousButton = useCallback(() => {
    if (!galleryRef.current) return null;

    return (
      <Button
        onClick={galleryRef.current.previousPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        left={0}
        disabled={!galleryRef.current.hasNextPage}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chevron_left_font_awesome.svg/30px-Chevron_left_font_awesome.svg.png"
          alt="Previous icon"
          width="30px"
        />
      </Button>
    );
  }, []);

  const NextButton = useCallback(() => {
    if (!galleryRef.current) return null;

    return (
      <Button
        onClick={galleryRef.current.nextPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        right={0}
        disabled={galleryRef.current.hasNextPage}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chevron_right_font_awesome.svg/30px-Chevron_right_font_awesome.svg.png"
          alt="Next icon"
          width="30px"
        />
      </Button>
    );
  }, []);

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
            ref={galleryRef}
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
