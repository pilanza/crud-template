'use client'

import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function SignInPage() {
    const email = useRef("")
    const password = useRef("")
    const [error, setError] = useState("")
    const router = useRouter()

    const onSubmit = async () => {
        try {
            const res = await signIn("credentials", {
                email: email.current,
                password: password.current,
                redirect: false,
            })
            if (res?.status === 200) {
                router.push("/admin")
            } else {
                throw new Error(res?.error)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen w-full"> 
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required onChange={(e) => (email.current = e.target.value)}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required onChange={(e) => (password.current = e.target.value)} />
                        </div>
                        <div>
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <Button onClick={onSubmit} className="w-full">
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}