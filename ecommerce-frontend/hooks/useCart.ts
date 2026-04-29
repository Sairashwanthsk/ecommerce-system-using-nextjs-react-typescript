import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
    return useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const userId = 1;
            const token = localStorage.getItem("token");
            const res = await fetch(`/api/cart/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token || ""}`,
                },
            });

            if (!res.ok) {
                throw new Error("Failed to fetch cart");
            }

            return res.json();
        },
    });
};