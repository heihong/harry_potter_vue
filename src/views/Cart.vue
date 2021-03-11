<template>
  <div>
    <div class="books-container">
      <div v-for="(book, index) of cart" :key="book.isbn">
        <app-book-cart :book="book" :index="index"></app-book-cart>
      </div>
    </div>
    <div v-if="cart.length > 0" class="margin">Total: {{ totalAmount }} €</div>
  </div>
</template>

<script lang="ts">
import { Book } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
import { Getter, State } from "vuex-class";
import BookDetailCart from "./BookDetailCart.vue";

@Component({
  components: {
    "app-book-cart": BookDetailCart,
  },
})
export default class Books extends Vue {
  @Getter private totalAmount!: number;
  @State((state) => state.shopConfig.cart) public cart!: Book[];
}
</script>

<style scoped>
.margin {
  margin: 10px;
}
.books-container {
  display: flex;
}
</style>
