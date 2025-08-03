import { Container, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  ColorModeIcon,
  useColorMode,
  useColorModeValue,
} from "./ui/color-mode";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container maxW={"6xl"} px={4} py="2">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        gap={"2"}
      >
        <Text
          fontSize={{
            base: "2xl",
            sm: "3xl",
          }}
          fontWeight="bold"
          textTransform={"uppercase"}
          bgClip={"text"}
          gradientFrom={useColorModeValue("gray.600", "white")}
          gradientTo={useColorModeValue("black", "gray.600")}
          bgGradient={"to-r"}
          textAlign={{ base: "center", sm: "left" }}
        >
          <Link to="/">Souq 🛒</Link>
        </Text>
        <HStack gap={2} alignItems={"center"}>
          <Link to="/Create">
            <IconButton size={"lg"} aria-label="Create">
              <FiPlusSquare size={20} />
            </IconButton>
          </Link>
          <IconButton
            size={"lg"}
            onClick={toggleColorMode}
            aria-label="Change Theme"
          >
            <ColorModeIcon />
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
