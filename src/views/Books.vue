<template>
  <div>
    <div class="margin">
      <div v-if="books.length === 0">loader...</div>
      <input type="text" v-model="search" placeholder="edit me" />
    </div>
    <div class="books-container" v-if="books.length !== 0">
      <div v-for="book of filterBook()" :key="book.isbn">
        <app-book :book="book"></app-book>
      </div>
    </div>
    <div v-if="search !== ''">
      <div v-if="filterBook().length === 0">no result</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Book } from "@/store/types";
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Mutation } from "vuex-class";
import BookDetail from "./BookDetail.vue";

@Component({
  components: {
    "app-book": BookDetail,
  },
})
export default class Books extends Vue {
  @Action public getBooks!: () => void;
  @Mutation public setBooks!: (books: Book[]) => void;
  @State((state) => state.shopConfig.books) public books!: Book[];
  public search = "";

  public mounted() {
    this.getBooks();
  }

  public filterBook() {
    if (this.search !== "") {
      return this.books.filter((el) => el.title.includes(this.search));
    }
    return this.books;
  }
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
