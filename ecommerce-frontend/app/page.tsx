// "use client";

// import { useProducts } from "@/hooks/useProducts";

// export default function ProductsPage() {
//     const { data: products, isLoading, error } = useProducts();

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error loading products</div>;

//     return (
//         <div className="grid grid-cols-3 gap-4 p-6">
//             {products?.map((product: any) => (
//                 <div key={product.id} className="border rounded-lg p-4">
//                     <h2 className="text-lg font-bold">{product.name}</h2>
//                     <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }