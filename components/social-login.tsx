"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

const providers = [
  { id: "google", label: "Google" },
  // { id: "apple", label: "Apple" },
  // { id: "tiktok", label: "TikTok" },
  // { id: "discord", label: "Discord" },
] as const

export function SocialLogin() {
  return (
    <div className="grid gap-2">
      {providers.map((provider) => (
        <Button
          key={provider.id}
          variant="outline"
          className="w-full"
          onClick={() =>
            authClient.signIn.social({
              provider: provider.id,
              callbackURL: "/",
            })
          }
        >
          Lanjut dengan {provider.label}
        </Button>
      ))}
    </div>
  )
}