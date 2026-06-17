import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProductsStore } from "@/pages/products/store/products.store";
import { ShoppingCart, Trash2Icon } from "lucide-react";

export function Sidebar() {
  const { products, totalQuantity } = useProductsStore();
  return (
    <Sheet>
      <SheetTrigger asChild className="relative">
        <Button variant="outline">
          <ShoppingCart className="h-4 w-4 " />{" "}
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gray-300 border border-gray-600 text-[10px] font-medium">
            {totalQuantity}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border rounded-sm p-2"
            >
              <div className="flex gap-2 items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover"
                />
                <div className="flex flex-col gap-0.5">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </div>
              <div className="flex gap-1.5 items-center">
                <Button variant="outline" size="icon" className="w-6 h-6">
                  <span>-</span>
                </Button>
                <p className="text-gray-500">{product.quantity}</p>
                <Button variant="outline" size="icon" className="w-6 h-6">
                  <span>+</span>
                </Button>
                <Button variant="outline" size="icon" className="w-6 h-6 bg-red-300">
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button variant="outline">Clear Cart</Button>
          <Button type="submit">Checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
