import { FC } from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";

export const Logo: FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <Image
        src="assets/img/logo.png"
        height="50px"
        width="1722px"
        alt="everlance logo"
      />
    </Box>
  );
};
