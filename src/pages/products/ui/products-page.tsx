
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon, Star } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/product.api";
import { useProductsStore } from "../store/products.store";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addProduct } = useProductsStore();

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
    })

    if (isLoading) {
        return (
            <div className="animate-pulse space-y-6">
                <div className="h-10 w-40 rounded-lg bg-gray-100" />
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="aspect-square rounded-2xl bg-gray-100" />
                    <div className="space-y-4">
                        <div className="h-8 w-24 rounded-full bg-gray-100" />
                        <div className="h-10 w-3/4 rounded-lg bg-gray-100" />
                        <div className="h-6 w-32 rounded-lg bg-gray-100" />
                        <div className="space-y-2">
                            <div className="h-4 w-full rounded bg-gray-100" />
                            <div className="h-4 w-full rounded bg-gray-100" />
                            <div className="h-4 w-2/3 rounded bg-gray-100" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-4 text-red-600">
                Error: {error.message}
            </div>
        )
    }

    if (!data) {
        return (
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-12 text-center text-gray-500">
                Product not found
            </div>
        )
    }

    const handleAddProduct = () => {
        addProduct(data);
    }

    return (
        <section className="flex flex-col gap-8">
            <Link
                to="/products"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:shadow"
            >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to products
            </Link>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                <div className="grid gap-0 lg:grid-cols-2">
                    <div className="flex items-center justify-center bg-gray-50 p-8 lg:p-12">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="max-h-80 w-full object-contain transition-transform duration-500 hover:scale-105 lg:max-h-96"
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-6 p-6 lg:p-10">
                        {data.category && (
                            <span className="w-fit rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium capitalize text-gray-600">
                                {data.category}
                            </span>
                        )}

                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                                {data.title}
                            </h1>

                            {data.rating && (
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star
                                                key={index}
                                                className={`h-4 w-4 ${index < Math.round(data.rating.rate)
                                                        ? "fill-amber-400 text-amber-400"
                                                        : "text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {data.rating.rate} ({data.rating.count} reviews)
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className="text-4xl font-bold text-gray-900">
                            <span className="text-lg font-medium text-gray-400">$</span>
                            {data.price.toFixed(2)}
                        </p>

                        <div className="border-t border-gray-100 pt-6">
                            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
                                Description
                            </h2>
                            <p className="text-base leading-relaxed text-gray-600">
                                {data.description}
                            </p>
                        </div>
                        <Button onClick={handleAddProduct} className="cursor-pointer w-full rounded-sm bg-gray-900 px-4 py-4.5 text-sm font-medium text-white transition-colors hover:bg-gray-700 sm:w-auto" >
                            Add to Cart</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}