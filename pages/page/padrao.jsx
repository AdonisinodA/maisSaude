import { Box } from "@chakra-ui/react";

export function Padrao(props) {
  return (
    <Box h={"100vh "} bgGradient="linear(to-r, green.200, pink.500)">
      {props.children}
    </Box>
  );
}
