import type { Product } from "@/interfaces";
import {
  Button,
  CloseButton,
  Dialog,
  IconButton,
  Input,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { useColorModeValue } from "./color-mode";
import { useProductStore } from "@/store/product";
import { toaster } from "./toaster";
import { useRef } from "react";

interface ModalProps {
  setProductToUpdate?: (product: Product) => void;
  productToUpdate?: Product;
  productId: string;
  mode: "EDIT" | "DELETE";
}

const Modal = ({
  setProductToUpdate,
  productToUpdate,
  mode,
  productId,
}: ModalProps) => {
  const { editProduct, deleteProduct } = useProductStore();
  const textColor = useColorModeValue("gray.700", "gray.200");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (setProductToUpdate && productToUpdate) {
      setProductToUpdate({ ...productToUpdate, [name]: value });
    }
  };
  const handleEdit = async () => {
    if (!productToUpdate) return;
    const { message, success } = await editProduct(productId, productToUpdate);

    if (success) {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true,
        duration: 3000,
      });
      closeBtnRef.current?.click();
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
  const handleDelete = async () => {
    const { message, success } = await deleteProduct(productId);
    if (success) {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        closable: true,
        duration: 3000,
      });
      closeBtnRef.current?.click();
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

  const handleSubmit = () => {
    if (mode === "EDIT") handleEdit();
    else handleDelete();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <IconButton
          aria-label={`${mode === "EDIT" ? "Edit product" : "Remove product"}`}
          colorPalette={`${mode === "EDIT" ? "cyan" : "red"}`}
        >
          {mode === "EDIT" ? <MdModeEditOutline /> : <FaTrashAlt />}
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                {mode === "EDIT" ? "Edit Product" : "Remove Product"}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {mode === "DELETE" ? (
                <Text fontWeight="bold" color={textColor} fontSize={"md"}>
                  Are you sure you want to delete this product? This action
                  cannot be undone.
                </Text>
              ) : (
                <VStack gap={4} width="100%">
                  <Input
                    placeholder="Item Name"
                    size="lg"
                    onChange={handleChange}
                    value={productToUpdate?.name}
                    name="name"
                  />
                  <Input
                    placeholder="Item Description"
                    size="lg"
                    onChange={handleChange}
                    value={productToUpdate?.description}
                    name="description"
                  />
                  <Input
                    placeholder="Item Price"
                    size="lg"
                    type="string"
                    name="price"
                    onChange={handleChange}
                    value={productToUpdate?.price}
                  />
                  <Input
                    placeholder="Item Image"
                    size="lg"
                    name="image"
                    onChange={handleChange}
                    value={productToUpdate?.image}
                  />
                </VStack>
              )}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button
                onClick={handleSubmit}
                colorPalette={`${mode === "DELETE" ? "red" : null}`}
              >
                {mode === "EDIT" ? "Save" : "Delete"}
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton ref={closeBtnRef} size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default Modal;
