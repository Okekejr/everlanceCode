import { MiniTypes } from "@/types/types";
import { Box, BoxProps, Flex, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends BoxProps {
  data: MiniTypes;
}

export const MiniCard: FC<Props> = ({ data }) => {
  const { followers, following, public_repos } = data;
  return (
    <HStack
      border="1px solid"
      borderColor="#00337C"
      borderRadius="15px"
      backgroundColor="#E2E8F0"
      color="#000"
      height={{ base: "auto", lg: "4.5rem" }}
      p={4}
      w={{ base: "14rem", lg: "16rem" }}
      my={12}
    >
      <Box
        display="flex"
        justifyContent="space-evenly"
        w={{ base: "20rem", lg: "50rem" }}
      >
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="0.7rem" fontWeight="light">
            Repos
          </Text>
          <Text>{public_repos}</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="0.7rem" fontWeight="light">
            Followers
          </Text>
          <Text>{followers}</Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="0.7rem" fontWeight="light">
            Following
          </Text>
          <Text>{following}</Text>
        </Flex>
      </Box>
    </HStack>
  );
};
