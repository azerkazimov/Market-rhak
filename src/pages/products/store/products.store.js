import { create } from "zustand";

const getTotalQuantity = (products) =>
  products.reduce((sum, prod) => sum + (prod.quantity), 0);

// useProductsStore === state

export const useProductsStore = create((set) => ({
  products: [],
  totalQuantity: 0,
  setProducts: (products) =>
    set({ products, totalQuantity: getTotalQuantity(products) }),
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        const products = state.products.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
        return { products, totalQuantity: getTotalQuantity(products) };
      }

      const products = [...state.products, { ...product, quantity: 1 }];
      return { products, totalQuantity: getTotalQuantity(products) };
    }),
}));

// export const useProductsStore = create((set) => ({
//   products: [],
//   count: 0, // separate state for the count
//   setProducts: (products) => set({ products, count: products.length }),
//   addProduct: (product) => 
//     set((state) => {
//       const existingProduct = state.products.find((p)=>p.id === product.id)
      
//       if(existingProduct) return state 
      
//       const updatedProducts = [...state.products, product]
//       return{
//         products: updatedProducts,
//         count: updatedProducts.length,
//       }
//     })
// }));