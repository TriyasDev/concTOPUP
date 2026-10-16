import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants  } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Game = {
  slug: string
  name: string
  publisher: string
  image: string
  price: number
  discount?: number
}

export function GameCard({ game }: { game: Game }) {
  return (
    <Card className="group w-full overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h- bg-linear-to-t p-25 from-card to-transparent" />

        {game.discount && (
          <Badge className="absolute top-3 left-3">
            Diskon {game.discount}%
          </Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>{game.publisher}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Mulai dari</p>
          <p className="font-semibold">
            Rp {game.price.toLocaleString("id-ID")}
          </p>
        </div>
        <Link 
        href={'product/${game.slug}'} 
        className={buttonVariants({ size: "sm" })}
        >
          Buy Now
        </Link>
      </CardFooter>
    </Card>
  )
}