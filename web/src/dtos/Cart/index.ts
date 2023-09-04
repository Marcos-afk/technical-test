import { ProductDTO } from '@dtos/Products';

export interface CartDTO {
  product: ProductDTO;
  quantity: number;
}
