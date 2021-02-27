<template>
  <div>
    <div v-for="book of books" :key="book.id">
      <app-book :title="book.title"></app-book>
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
