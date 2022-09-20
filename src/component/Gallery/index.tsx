import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState } from "react";

interface ImageType {
  src: string;
}

interface Props {
  images: ImageType[];
  customPreviousButton?: JSX.Element;
  customNextButton?: JSX.Element;
}

const Gallery = (props: Props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [hasNextPage, setHasNextPage] = useState(false);

  const renderBoxImage = useCallback(
    (images: ImageType[]) => {
      const slicedImages = images.slice(start, end);

      return slicedImages.map((image, index) => (
        <Box key={image.src} width="60px" height="60px" marginRight={4}>
          <Image
            src={image.src}
            alt={`Gallery image ${index + 1}`}
            height="100%"
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
      ));
    },
    [start, end]
  );

  const previousPage = useCallback(() => {
    setStart((_start) => _start - 4);
    setEnd((_end) => _end - 4);
  }, []);

  const nextPage = useCallback(() => {
    setStart((_start) => _start + 4);
    setEnd((_end) => _end + 4);
  }, []);

  const PreviousButton = useCallback(() => {
    if (props.customPreviousButton) return props.customPreviousButton;

    return (
      <Button
        onClick={previousPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        left={0}
        disabled={hasNextPage}
      >
        {"<"}
      </Button>
    );
  }, [props.customPreviousButton, previousPage, hasNextPage]);

  const NextButton = useCallback(() => {
    if (props.customNextButton) return props.customNextButton;

    return (
      <Button
        onClick={nextPage}
        background="transparent"
        border="none"
        width="50px"
        height="50px"
        fontSize="xl"
        position="absolute"
        right={0}
        disabled={!hasNextPage}
      >
        {">"}
      </Button>
    );
  }, [props.customNextButton, nextPage, hasNextPage]);

  useEffect(() => {
    setHasNextPage(end < props.images.length - 1);
  }, [end, props.images]);

  return (
    <Flex
      flex={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <PreviousButton />
      {renderBoxImage(props.images)}
      <NextButton />
    </Flex>
  );
};

export default memo(Gallery);
