import Link from "next/link"
import { cacheLife } from "next/cache"
import { ModeTonggle } from "./mode-toggle"

const footerSections = [
  {
    title: "Useful Links",
    links: [
      { label: "About Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "S&K", href: "#" }
    ]
  },
  {
    title: "Our Social Media",
    links: [
      { label: "Instagram", href: "/instagram" },
      { label: "Tiktok", href: "/Tiktok" },
      { label: "Facebook", href: "/Facebook" },
      { label: "Youtube", href: "/Youtube" }
    ]
  },
]

async function getCachedYear() {
  'use cache'
  cacheLife('max')
  return new Date().getFullYear()
}

export async function Footer() {
  const currentYear = await getCachedYear()

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                    >
                    {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="">Choose Color<ModeTonggle /></p>
        </div>

        <div className="mt-12 border-t pt-6 text-xs text-muted-foreground">
          &copy; {currentYear} ConcTOPUP. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
