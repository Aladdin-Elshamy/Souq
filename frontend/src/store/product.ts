import type { Product } from "@/interfaces";
import { create } from "zustand";

type Store = {
  products: Product[];
  loading: boolean;
  setProducts: (products: Product[]) => void;
  createProduct: (
    newProduct: Product
  ) => Promise<{ message: string; success: boolean }>;
  fetchProducts: () => Promise<void>;
  editProduct: (
    id: string,
    newProduct: Product
  ) => Promise<{ message: string; success: boolean }>;
  deleteProduct: (id: string) => Promise<{ message: string; success: boolean }>;
};

export const useProductStore = create<Store>((set) => ({
  products: [],
  loading: true,
  setProducts: (products: Product[]) => set({ products }),
  createProduct: async (newProduct: Product) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { message: "Some fields are missing", success: false };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.product] }));
    return { message: "Product created successfully", success: true };
  },
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data.products, loading: false });
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      set({ loading: false });
    }
  },
  editProduct: async (id: string, newProduct: Product) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { message: "Some fields are missing", success: false };
    }
    const res = await fetch(`/api/products/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    if (!data.success) {
      return { message: data.message, success: data.success };
    }
    set((state) => ({
      products: state.products.map((p) => (p._id === id ? data.product : p)),
    }));
    return { message: data.message, success: data.success };
  },
  deleteProduct: async (id: string) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      return { message: data.message, success: data.success };
    }
    set((state) => ({
      products: state.products.filter((p) => p._id !== id),
    }));
    return { message: data.message, success: data.success };
  },
}));
