"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { ModeTonggle } from "@/components/ui/mode-toggle"
import { authClient } from "@/lib/auth-client"

const navLinks = [
  { label: "Product", href: "/" },
  { label: "AboutUs", href: "/About" },
  { label: "GameNews", href: "/News"}
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  async function handleSignOut() {
    await authClient.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-bold">
          ConcTOPUP
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeTonggle />

          {isPending ? (
            <div className="h-8 w-24" aria-hidden />
          ) : session ? (
            <>
              <Link href="/akun" className="text-sm font-medium">
                {session.user.name.split(" ")[0]}
              </Link>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" className="text-sm font-medium">
              Login
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <XIcon className="size-4" /> : <ListIcon className="size-4" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}