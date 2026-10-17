import { Suspense } from 'react'
import { AuthForm } from "@/components/auth/auth-form"
import { safeRedirect } from "@/lib/safe-redirect"

async function LoginContent({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next } = await searchParams
  return <AuthForm mode="login" next={safeRedirect(next)} />
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <LoginContent searchParams={searchParams} />
    </Suspense>
  )
}