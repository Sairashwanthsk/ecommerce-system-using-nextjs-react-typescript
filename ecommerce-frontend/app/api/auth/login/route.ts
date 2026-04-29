export async function POST(req: Request) {
    const body = await req.json();

    const res = await fetch(
        "https://glorious-zebra-vpvrw5g77p4v2wr7x-8080.app.github.dev/ecommerce/api/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    );

    const data = await res.text();

    return new Response(data, {
        status: res.status,
        headers: {
            "Content-Type": "application/json",
        }
    });
}