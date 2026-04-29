import { useMutation } from '@tanstack/react-query';

export const useAddToCart = () => {
    return useMutation({
        mutationFn: async (productId: number) => {
            const token = localStorage.getItem("token");
            const res = await fetch("/api/cart",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token || ""}`,
                    },
                    body: JSON.stringify({ userId: 1, productId, quantity: 1 }),
                }
            );

            if (!res.ok) {
                throw new Error("Failed to add to cart");
            }

            alert("Product added to cart!");
            return res.json();
        }
    });
};