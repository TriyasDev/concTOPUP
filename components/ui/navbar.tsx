"use client"

import Link from "next/link"
import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { ModeTonggle } from "@/components/ui/mode-toggle"

const navLinks = [
  { label: "Home", href: "/homme"},
]

export function Navbar() {
  const [open, setOpen] = useState(false)

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