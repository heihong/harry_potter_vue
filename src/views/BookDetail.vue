<template>
  <div class="book-container">
    <p>{{ book.title }}</p>
    <p>{{ book.cover }}</p>
    <p>{{ book.price }} €</p>
    <button @click="addToCart(book)">ajouter</button>
  </div>
</template>

<script lang="ts">
import { Book } from "@/store/types";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component({
  components: {},
})
export default class BookDetail extends Vue {
  @Prop() public book!: Book;
  @Mutation public addToCart!: (book: Book) => void;
}
</script>

<style scoped>
.book-container {
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
</style>
