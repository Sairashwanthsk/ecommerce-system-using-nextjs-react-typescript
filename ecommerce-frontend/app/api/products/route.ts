export async function GET(req: Request) {
    try {

        const token = req.headers.get("authorization");
        
        const res = await fetch(
            "https://glorious-zebra-vpvrw5g77p4v2wr7x-8080.app.github.dev/ecommerce/api/products",
            {
                method: "GET",
                headers: {
                    Authorization: token || "",
                },
                cache: "no-store",
            }
        );

        const data = await res.json();

        return Response.json(data);
    } catch (err) {
        return new Response("Backend error" + err, { status: 500 })
    }
}