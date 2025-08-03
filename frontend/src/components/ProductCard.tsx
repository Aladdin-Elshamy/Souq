import type { Product } from "@/interfaces";
import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Modal from "./ui/dialog";

const ProductCard = ({ name, description, image, price, _id }: Product) => {
  const [productToUpdate, setProductToUpdate] = useState<Product>({
    _id,
    name,
    description,
    image,
    price,
  });
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      transition={"all 0.3s"}
      _hover={{
        shadow: "xl",
        transform: "translateY(-5px)",
      }}
      display={"flex"}
      flexDirection={"column"}
      overflow="hidden"
    >
      <Image
        src={image}
        title={name}
        roundedTop={"lg"}
        alt={description || name}
        loading="lazy"
        objectFit={"cover"}
        w="full"
        h="48"
      />
      <VStack
        alignItems={"start"}
        justifyContent={"space-between"}
        p="4"
        flex="1"
      >
        <Heading as={"h2"}>{name}</Heading>
        {description && <Text lineClamp={2}>{description}</Text>}
        <Text fontWeight={"bold"}>{price}$</Text>
        <HStack>
          <Modal
            setProductToUpdate={setProductToUpdate}
            productToUpdate={productToUpdate}
            mode="EDIT"
            productId={_id || ""}
          />
          <Modal mode="DELETE" productId={_id || ""} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductCard;
