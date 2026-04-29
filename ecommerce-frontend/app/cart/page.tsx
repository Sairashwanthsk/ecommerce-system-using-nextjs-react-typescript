"use client";

import { useCart } from "@/hooks/useCart";

export default function CartPage() {
    const { data, isLoading, isError, error } = useCart();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading cart: {error.message}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {data?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {data?.map((item: any) => (
                        <li key={item.productId} className="mb-2">
                            {item.name} - {item.quantity}
                            {/* {item.name} - ${item.price.toFixed(2)} x {item.quantity} */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}