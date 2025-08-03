import { useProductStore } from "@/store/product";
import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddProduct = async () => {
    const { message, success } = await createProduct(product);

    if (success) {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true,
        duration: 3000,
      });
    } else {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        closable: true,
        duration: 3000,
      });
    }
  };
  return (
    <Container maxW={"xl"} px={4} py={8}>
      <VStack gap={8} alignItems={"center"} justifyContent={"center"}>
        <Heading as="h1" size="xl" textAlign="center">
          Create a New Item
        </Heading>
        <VStack
          gap={4}
          bg={"bg"}
          p={4}
          borderRadius="lg"
          shadow={"md"}
          width="100%"
        >
          <Input
            placeholder="Item Name"
            size="lg"
            onChange={handleChange}
            value={product.name}
            name="name"
          />
          <Input
            placeholder="Item Description"
            size="lg"
            onChange={handleChange}
            value={product.description}
            name="description"
          />
          <Input
            placeholder="Item Price"
            size="lg"
            type="string"
            name="price"
            onChange={handleChange}
            value={product.price}
          />
          <Input
            placeholder="Item Image"
            size="lg"
            name="image"
            onChange={handleChange}
            value={product.image}
          />
          <Button width={"full"} onClick={handleAddProduct}>
            Add Item
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default CreatePage;
