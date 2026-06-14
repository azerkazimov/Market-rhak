import { Button } from "@/components/ui/button"
import { useProductsStore } from "../store/products.store";

export default function ProductsCard({ product }) {
  const { title, price, category, image } = product

  const { addProduct } = useProductsStore();

  const handleAddProduct = () => {
    addProduct(product);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-gray-50 p-6">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-gray-600 shadow-sm backdrop-blur-sm">
          {category}
        </span>

        <div className="flex aspect-square items-center justify-center">
          <img
            src={image}
            alt={title}
            className="h-full max-h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-snug text-gray-900">
          {title}
        </h3>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-bold text-gray-900">
            <span className="text-sm font-medium text-gray-400">$</span>
            {price.toFixed(2)}
          </p>

          <Button
            type="button"
            className="w-full rounded-sm bg-gray-900 px-4 py-4.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 sm:w-auto"
            onClick={handleAddProduct}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  )
}
