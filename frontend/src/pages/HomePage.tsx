import ProductCard from "@/components/ProductCard";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";
import {
  Container,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { fetchProducts, products, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const skeletonBg = useColorModeValue("gray.300", "gray.200");
  const emptyTextColor = useColorModeValue("gray.700", "gray.200");
  return (
    <Container maxW="6xl">
      <VStack>
        <Heading
          fontSize={"xl"}
          textTransform={"uppercase"}
          bgClip={"text"}
          gradientFrom={useColorModeValue("gray.600", "white")}
          gradientTo={useColorModeValue("black", "gray.300")}
          bgGradient={"to-r"}
          as="h1"
        >
          Current Products 🚀
        </Heading>
        {!loading && products?.length === 0 && (
          <Text fontSize={"xl"}>
            No available products 😞{" "}
            <Text
              as="span"
              fontWeight={"bold"}
              _hover={{
                textDecoration: "underline",
              }}
              color={emptyTextColor}
            >
              <Link to="/create">Create One</Link>
            </Text>
          </Text>
        )}
        <SimpleGrid columns={[1, 2, 3]} py="8" w={"full"} gap={8}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Skeleton
                  bg={skeletonBg}
                  key={i}
                  height="400px"
                  rounded={"xl"}
                />
              ))
            : products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;
