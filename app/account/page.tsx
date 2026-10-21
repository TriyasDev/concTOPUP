import { Suspense } from "react"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

export default function AkunPage() {
  return (
    <Suspense fallback={<AkunSkeleton />}>
      <AkunContent />
    </Suspense>
  )
}

async function AkunContent() {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) redirect("/login?next=/akun")

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-xl font-semibold">Halo, {session.user.name}</h1>
      <p className="text-sm text-muted-foreground">{session.user.email}</p>
    </section>
  )
}

function AkunSkeleton() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="h-7 w-48 bg-muted" />
    </section>
  )
}