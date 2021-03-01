<template>
  <div>
    <div v-if="books.length === 0">loader...</div>
    <div class="books-container" v-if="books.length !== 0">
      <div v-for="book of books" :key="book.isbn">
        <app-book :book="book"></app-book>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import BookDetail from "./BookDetail.vue";

@Component({
  components: {
    "app-book": BookDetail,
  },
})
export default class Books extends Vue {
  @Action public getBooks!: () => void;
  @State((state) => state.shopConfig.books) public books!: Book[];

  public mounted() {
    this.getBooks();
  }
}
</script>

<style scoped>
.books-container {
  display: flex;
}
</style>
