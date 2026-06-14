import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../services/product.api'
import ProductsCard from './products-card'

export default function ProductsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <p className="mt-2 text-gray-500">Browse our latest collection</p>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-96 animate-pulse rounded-2xl border border-gray-100 bg-gray-100"
            />
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-4 text-red-600">
          Error: {error.message}
        </div>
      )}

      {data && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
