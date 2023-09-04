import { HomePage } from '@components/Home';
import { api } from '@libs/axios';

export default async function Home() {
  const { data } = await api.get('stripe/products');

  return <HomePage data={data.products} />;
}
