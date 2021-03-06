export interface Book {
  isbn: string;
  title: string;
  cover: string;
  price: number;
  synopsis: string[];
}

export interface OfferPercentageMinus {
  value: number;
  type: string;
}

export interface OfferSlice {
  value: number;
  type: string;
  sliceValue: number;
}

export type Offer = OfferPercentageMinus | OfferSlice;

export interface ShopState {
  books: Book[];
  cart: Book[];
}

export interface RootState {
  shopState: ShopState;
}
