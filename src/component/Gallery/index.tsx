import { Box, Flex, Image } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";

interface ImageType {
  src: string;
}

interface Props {
  images: ImageType[];
}

const Gallery = (props: Props) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

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

  return (
    <Flex
      flex={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {renderBoxImage(props.images)}
    </Flex>
  );
};

export default memo(Gallery);
