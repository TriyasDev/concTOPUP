import { ProductSection } from "@/components/product-section";
import { categories, products } from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      {categories.map((category) => (
        <ProductSection 
          key={category.id}
          title={category.title}
          products={products.filter((p) => p.category === category.id )}
        />
      ))}
    </main>
  )
}