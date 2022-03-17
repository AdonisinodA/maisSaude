import {
  Box,
  Flex,
  Button,
  Collapse,
  Lorem,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "../components/Logo";
import Link from "next/link";
export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      bg={"teal"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      h={"100px"}
      alignItems={"center"}
    >
      <Box p={4}>
        <Logo></Logo>
      </Box>
      <Box h={"50px"} m={4}>
        <Button onClick={onToggle}>Conta Teste</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            color="white"
            mt="4"
            bg="teal.500"
            w={"50px"}
            rounded="md"
            shadow="md"
          >
            <Link href={"/"}>Sair</Link>
          </Box>
        </Collapse>
      </Box>
    </Flex>
  );
}
