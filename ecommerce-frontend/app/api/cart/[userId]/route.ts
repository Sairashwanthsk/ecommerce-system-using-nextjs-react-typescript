
export async function GET(req: Request, context: { params: Promise<{userId: string}> }) {
    try {
        const token = req.headers.get("authorization");
        const { userId } = await context.params;

        const res = await fetch(
            `https://glorious-zebra-vpvrw5g77p4v2wr7x-8080.app.github.dev/ecommerce/api/cart/${userId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
            }
        );

        const data = await res.json();
        console.log(data)

        return Response.json(data);
    } catch (err) {
        console.log("Backend error" + err, { status: 500 });
        return new Response("Backend error" + err, { status: 500 })
    }
}