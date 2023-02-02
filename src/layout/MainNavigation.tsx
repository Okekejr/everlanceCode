import { Logo } from "@/components/Logo/Logo";
import { Flex, FlexProps, Link } from "@chakra-ui/react";
import { FC } from "react";
import { ToggleColorMode } from "./ToggleColorMode";

export const MainNavigation: FC<FlexProps> = (props) => {
  return (
    <Flex
      w="auto"
      h={{ base: "4rem" }}
      align="center"
      bgColor="#00337C"
      color="#ffff"
      {...props}
    >
      <Flex
        justifyContent="space-between"
        w={{ base: "8rem", md: "12rem" }}
        px={{ base: "1rem" }}
      >
        <Link href="/">
          <Logo />
        </Link>
        <ToggleColorMode />
      </Flex>
    </Flex>
  );
};
