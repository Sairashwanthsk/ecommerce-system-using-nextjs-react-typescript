import api from "./api";

export const getProducts = async () => {
    try {
        const res = await fetch("/api/products", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
            }
        });
        if (!res.ok) {
            throw new Error(`Error fetching products: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
};

export const createProduct = async (productData: any) => {
    try {
        const response = await api.post("/products", productData);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};

export const updateProduct = async (id: string, productData: any) => {
    try {
        const response = await api.put(`/products/${id}`, productData);
        return response.data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
};

export const deleteProduct = async (id: string) => {
    try {
        await api.delete(`/products/${id}`);
    } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw error;
    }
};