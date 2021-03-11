import { Book, RootState, ShopState } from "./types";
import { Module, MutationTree, GetterTree, ActionTree } from "vuex";
import axios from "axios";

export const initialState: ShopState = {
  books: [],
  cart: [],
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
export const getters: GetterTree<ShopState, RootState> = {
  totalAmount(state) {
    return state.cart.reduce((acc, b) => acc + b.price, 0);
  },
};

const actions: ActionTree<ShopState, RootState> = {
  getBooks({ commit }) {
    setTimeout(function() {
      axios.get("data.json").then((response) => {
        const books = response.data.books;
        commit("setBooks", books);
      });
    }, 3000);
  },
};

export const shopConfig: Module<ShopState, RootState> = {
  state: initialState,
  actions,
  mutations,
  getters,
};
