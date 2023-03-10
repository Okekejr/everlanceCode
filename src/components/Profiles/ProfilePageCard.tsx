import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMailSharp, IoLinkOutline } from "react-icons/io5";
import { TfiTwitterAlt } from "react-icons/tfi";
import { AiOutlineGithub } from "react-icons/ai";
import { MiniCard } from "./MiniCard";
import { userData } from "@/types/types";

interface Props extends BoxProps {
  data: userData;
}

export const ProfilePageCard: FC<Props> = ({ data, ...rest }) => {
  const {
    avatar_url,
    login,
    name,
    bio,
    location,
    email,
    twitter_username,
    blog,
    public_repos,
    followers,
    following,
    html_url
  } = data;

  const datos = { public_repos, followers, following };

  return (
    <Box
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="#00337C"
      borderRadius="5px"
      height={{ base: "auto", lg: "20rem" }}
      p={8}
      w={{ base: "18rem", md: "40rem", lg: "45rem" }}
      my="5rem"
      mx="auto"
      {...rest}
    >
      <Avatar name={name} src={avatar_url} size="lg" mr={12} mb={{ base: 4 }} />
      <Flex
        flexDirection="column"
        w={{ base: "fit-content", md: "12rem" }}
        h={{ base: "fit-content", md: "16rem" }}
        mr={12}
        mb={{ base: 4 }}
      >
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="0.9rem" fontWeight="light" my={4}>
          {login}
        </Text>
        <Text fontSize="0.7rem" fontWeight="light" h="5rem" mb={12}>
          {bio}
        </Text>
        <Flex alignItems="center" mb={4}>
          <MdLocationOn />
          <Text ml={4}>{location ? location : "N/A"}</Text>
        </Flex>
        <Flex alignItems="center">
          <IoMailSharp />
          <Text ml={4}>{email ? email : "N/A"}</Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        w={{ base: "fit-content", md: "17rem" }}
        h={{ base: "fit-content", md: "16rem" }}
      >
        <Flex alignItems="center">
          <Button variant="ghost" padding={0}>
            <Link href={html_url} isExternal={true} padding={0}>
              <AiOutlineGithub size="1rem" />
            </Link>
          </Button>
          <Text fontSize="0.9rem">
            {login}
          </Text>
        </Flex>
        <MiniCard data={datos} />
        <Flex alignItems="center" mb={4}>
          <TfiTwitterAlt color="#63B3ED" />
          <Text ml={4}>{twitter_username ? twitter_username : "N/A"}</Text>
        </Flex>
        <Flex alignItems="center">
          <IoLinkOutline />
          <Text ml={4}>{blog ? blog : "N/A"}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
