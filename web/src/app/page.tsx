import { Home } from '@components/Home';
import { api } from '@libs/axios';

export default async function Page() {
  const { data } = await api.get('stripe/products');

  return <Home data={data.products} />;
}
