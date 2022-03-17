/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";
import * as React from "react";
import { Logo } from "../components/Logo";
import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import { PasswordField } from "../components/PasswordField";

export const App = () => (
  <Container
    maxW="lg"
    py={{
      base: "12",
      md: "24",
    }}
    px={{
      base: "0",
      sm: "8",
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6">
        <Logo />
        {/* <Stack
          spacing={{
            base: "2",
            md: "3",
          }}
          textAlign="center"
        >
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
          >
            Log in to your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Dont have an account?</Text>
            <Button variant="link" colorScheme="red">
              Sign up
            </Button>
          </HStack>
        </Stack> */}
      </Stack>
      <Box
        py={{
          base: "0",
          sm: "8",
        }}
        px={{
          base: "4",
          sm: "10",
        }}
        bg={useBreakpointValue({
          base: "transparent",
          sm: "bg-surface",
        })}
        boxShadow={{
          base: "none",
          sm: useColorModeValue("md", "md-dark"),
        }}
        borderRadius={{
          base: "none",
          sm: "xl",
        }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>

          <Stack spacing="6">
            <Link href="/page/dashboard">
              <Button colorScheme="teal">Entrar</Button>
            </Link>
            ;
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
