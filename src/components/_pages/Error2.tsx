import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends BoxProps {
  data: any;
}

export const ErrorPage2: FC<Props> = ({ data }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      margin="auto"
      textAlign="center"
    >
      <Text>{`Oops we have encountered an Error ${data}`}</Text>
    </Box>
  );
};
