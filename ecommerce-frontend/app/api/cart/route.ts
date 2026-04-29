export async function POST(req: Request) {
    try {
        const token = req.headers.get("authorization");
        const body = await req.json();

        const res = await fetch(
            "https://glorious-zebra-vpvrw5g77p4v2wr7x-8080.app.github.dev/ecommerce/api/cart",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await res.json();

        return Response.json(data);
    } catch (err) {
        console.log("Backend error" + err, { status: 500 });
        return new Response("Backend error" + err, { status: 500 })
    }
}
