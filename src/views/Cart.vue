<template>
  <div class="books-container">
    <div v-for="(book, index) of cart" :key="book.isbn">
      <app-book-cart :book="book" :index="index"></app-book-cart>
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import BookDetailCart from "./BookDetailCart.vue";

@Component({
  components: {
    "app-book-cart": BookDetailCart,
  },
})
export default class Books extends Vue {
  @State((state) => state.shopConfig.cart) public cart!: Book[];
}
</script>

<style scoped>
.books-container {
  display: flex;
}
</style>
