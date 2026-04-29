"use client";

import { useProducts } from "@/hooks/useProducts";
import { useAddToCart } from "@/hooks/useAddToCart";
import Link from "next/link";

export default function ProductsPage() {
    const { data, isLoading, isError, error } = useProducts();
    const { mutate } = useAddToCart();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products: {error.message}</div>;

    return (
        <div className="grid grid-cols-3 gap-4 p-6">
            <Link href="/cart" className="col-span-3 mb-4 text-right">
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                    View Cart
                </button>
            </Link>
            {data?.map((product: any) => (
                <div key={product.id} className="border rounded-lg p-4">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                    <button
                        onClick={() => mutate(product.id)}
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}