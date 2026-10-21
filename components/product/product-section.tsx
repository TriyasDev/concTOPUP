import { GameCard } from "@/components/product/game-card"
import { type Product } from "@/lib/products"

type Props = {
  title: string
  products: Product[]
}

export function ProductSection({ title, products }: Props) {
  if (products.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 text-xl font-semibold">{title}</h2>

      <div className="-mx-4 -my-4 flex gap-6 overflow-x-auto px-4 py-4 snap-x snap-mandatory">
        {products.slice(0, 8).map((product) => (
          <div key={product.slug} className="w-64 shrink-0 snap-start">
            <GameCard game={product} />
          </div>
        ))}
      </div>
    </section>
  )
}