"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

type Props = {
  mode: "login" | "signup"
  next: string
}

const inputClass =
  "h-11 w-full border-2 border-foreground bg-background px-3 text-sm outline-none focus-visible:bg-muted"

export function AuthForm({ mode, next }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isSignup = mode === "signup"
  const errorCallbackURL = isSignup ? "/daftar" : "/login"

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const password = String(data.get("password") ?? "")
    const name = String(data.get("name") ?? "").trim()

    const res = isSignup
      ? await authClient.signUp.email({ email, password, name, callbackURL: next })
      : await authClient.signIn.email({ email, password, callbackURL: next })

    setLoading(false)

    if (res.error) {
      setError(res.error.message ?? "Gagal. Periksa data lalu coba lagi.")
      return
    }

    router.push(next)
    router.refresh()
  }

  function onGoogle() {
    authClient.signIn.social({
      provider: "google",
      callbackURL: next,
      errorCallbackURL,
    })
  }

  return (
    <section className="mx-auto flex max-w-sm flex-col gap-6 px-6 py-16">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">
          {isSignup ? "Register" : "Login"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {isSignup
            ? "Dapatkan berbagai benefit dengan membuat akun"
            : "Gunakan akun email anda untuk mempercepat proses topup"}
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        {isSignup && (
          <label className="grid gap-1.5 text-sm">
            Nama
            <input name="name" required autoComplete="name" className={inputClass} />
          </label>
        )}

        <label className="grid gap-1.5 text-sm">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={inputClass}
          />
        </label>

        <label className="grid gap-1.5 text-sm">
          Kata sandi
          <input
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={isSignup ? "new-password" : "current-password"}
            className={inputClass}
          />
        </label>

        {error && (
          <p role="alert" className="border-2 border-destructive p-2 text-xs text-destructive">
            {error}
          </p>
        )}

        <Button type="submit" className="h-11 w-full" disabled={loading}>
          {loading ? "Memproses..." : isSignup ? "Daftar" : "Masuk"}
        </Button>
      </form>

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        atau
        <span className="h-px flex-1 bg-border" />
      </div>

      <Button variant="outline" className="h-11 w-full" onClick={onGoogle}>
        Lanjut dengan Google
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {isSignup ? "Sudah punya akun? " : "Belum punya akun? "}
        <Link
          href={isSignup ? `/login?next=${encodeURIComponent(next)}` : `/daftar?next=${encodeURIComponent(next)}`}
          className="font-medium text-foreground underline underline-offset-4"
        >
          {isSignup ? "Masuk" : "Daftar"}
        </Link>
      </p>
    </section>
  )
}