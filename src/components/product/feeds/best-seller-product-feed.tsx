import ProductsCarousel from '@components/product/products-carousel';
import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import { LIMITS } from '@framework/utils/limits';
import { ROUTES } from '@utils/routes';
import { createClient } from 'src/prismicio';

export default async function BestSellerProductFeed() {
  const client = createClient();
  const products = await client.getAllByType('products');

  return (
    <ProductsCarousel
      sectionHeading="text-best-sellers-product"
      products={products}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="best-sellers"
      className={`mb-8 lg:mb-12 navTopSlider`}
    />
  );
}
