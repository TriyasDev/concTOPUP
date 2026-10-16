import { AuthForm } from "@/components/auth/auth-form"
import { safeRedirect } from "@/lib/safe-redirect"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next } = await searchParams
  return <AuthForm mode="login" next={safeRedirect(next)} />
}