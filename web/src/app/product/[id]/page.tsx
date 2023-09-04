import { ProductDetails } from '@components/ProductDetails';
import { api } from '@libs/axios';

interface ProductProps {
  params: {
    id: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { data } = await api.get(`stripe/product/${params.id}`);

  return <ProductDetails product={data.product} />;
}
