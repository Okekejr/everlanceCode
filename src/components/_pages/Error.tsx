import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

export const ErrorPage: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      margin="auto"
      textAlign="center"
    >
      <Text>Oops something went wrong</Text>
    </Box>
  );
};
