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
import { ShoppingCart } from "lucide-react";

export function Sidebar() {
    const { products } = useProductsStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="h-4 w-4" />{" "}
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
                <div key={product.id} className="flex items-center gap-2">
                    <img src={product.image} alt={product.title} className="w-10 h-10 object-cover" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
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
