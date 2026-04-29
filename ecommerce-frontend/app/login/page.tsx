"use client";

import { useForm } from "react-hook-form";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async () => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        localStorage.setItem("token", data.token);
        router.push("/products");
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </div>
        </div>
    );
}