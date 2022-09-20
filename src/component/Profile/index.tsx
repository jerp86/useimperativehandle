import { Flex, Image, Text } from "@chakra-ui/react";
import { memo } from "react";

const Profile = () => (
  <Flex>
    <Flex alignItems="center">
      <Image
        src="https://github.com/jerp86.png"
        alt="Profile pic"
        width={48}
        height={48}
        borderRadius="full"
      />
    </Flex>

    <Flex flexDirection="column" justifyContent="center" marginLeft={4}>
      <Text fontSize="2xl" fontWeight="semibold" color="#3943B7">
        José Pinto
      </Text>
      <Text fontSize="lg" fontWeight="medium" color="#717171">
        Frontend Specialist
      </Text>
    </Flex>
  </Flex>
);

export default memo(Profile);
