import ProductPage from '@/pages/products/ui/products-page'
import RootLayout from '../layout/root-layout'
import AboutPage from '../pages/about/ui/about'
import HomePage from '../pages/main/ui/home'
import ProductsPage from '../pages/products/ui/products'

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:id',
        element: <ProductPage />,
      }
    ],
  },
]
