import { ItemsEntity } from "@/types/types";
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineGithub } from "react-icons/ai";

interface Props extends BoxProps {
  data: ItemsEntity;
}

export const Cards: FC<Props> = ({ data, ...rest }) => {
  const { avatar_url, login, html_url } = data;
  return (
    <VStack {...rest}>
      <Box
        display="flex"
        flexDir="column"
        border="1px solid"
        borderColor="#00337C"
        borderRadius="5px"
        height={{ base: "auto", lg: "10rem" }}
        p={4}
        w={{ base: "18rem", lg: "20rem" }}
        backdropFilter="blur(24px)"
      >
        <Flex alignItems="center" mb={8}>
          <Avatar
            name={login}
            src={avatar_url}
            size="lg"
            background="transparent"
            mr={4}
          />
          <Text>{login}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Button variant="ghost">
            <Link href={html_url} isExternal={true}>
              <AiOutlineGithub size="1.4rem" />
            </Link>
          </Button>
          <Button>View profile</Button>
        </Flex>
      </Box>
    </VStack>
  );
};
