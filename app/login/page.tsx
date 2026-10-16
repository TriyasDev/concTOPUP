import { SocialLogin } from "@/components/social-login"

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-sm flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="text-xl font-semibold">Masuk</h1>
        <p className="text-sm text-muted-foreground">
          Lanjutkan dengan akun yang sudah kamu punya.
        </p>
      </div>
      <SocialLogin />
    </section>
  )
}