export class CreateOrderDto {
  userId: number;
  productId: number;
  quantity: string;
  price: string;
  addressId: number;
  totalprice: number;
}
