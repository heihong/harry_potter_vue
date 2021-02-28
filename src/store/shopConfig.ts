import { Book, RootState, ShopState } from "./types";
import { Module, MutationTree, GetterTree, ActionTree } from "vuex";
import axios from "axios";

export const initialState: ShopState = {
  books: [],
  isLoading: false,
  cart: [],
  totalAmount: 0,
  offers: [],
  minPrices: 0,
};

const mutations: MutationTree<ShopState> = {
  setBooks(state, books) {
    state.books = books;
  },
  addToCart(state, book) {
    state.cart.push(book);
  },
  deleteBook(state, index) {
    state.cart.splice(+index, 1);
  },
};

const actions: ActionTree<ShopState, RootState> = {
  getBooks({ commit }) {
    axios.get("data.json").then((response) => {
      const books = response.data.books;
      commit("setBooks", books);
    });
  },
};

export const shopConfig: Module<ShopState, RootState> = {
  state: initialState,
  actions,
  mutations,
};
