import { notFound } from "next/navigation"
import { products } from "@/lib/products"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) notFound()

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-video w-full rounded-xl object-cover"
      />
      <h1 className="mt-6 text-2xl font-bold">{product.name}</h1>
      <p className="text-muted-foreground">{product.publisher}</p>
    </section>
  )
}