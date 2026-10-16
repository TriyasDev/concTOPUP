"use client"

import Link from "next/link"
import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { ModeTonggle } from "@/components/ui/mode-toggle"
import { authClient } from "@/lib/auth-client"

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "AboutUs", href: "/About" },
  { label: "Product", href: "/Product" },
  // { label: "TellUsMore", href: "/Feedback" },
  // { label: "Ranking", href: "/Rank" },
  // { label: "Account", href: "/Account" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { data: session } = authClient.useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-bold">
          ConcTOPUP
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeTonggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close" : "Open"}
            >
              {open ? <XIcon className="size-4" /> : <ListIcon className="size-4"/>}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => authClient.signOut()} >
              LogOut
            </Button>
            <Link href="/login" className="text-sm font-medium">
              LogIn
            </Link>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t px-6 md:hidden">
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