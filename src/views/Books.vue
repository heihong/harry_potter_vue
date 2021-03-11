<template>
  <div>
    <div class="margin">
      <div v-if="books.length === 0">loader...</div>
      <input type="text" v-model="search" placeholder="edit me" />
    </div>
    <div class="books-container" v-if="books.length !== 0">
      <div v-for="book of filterBook" :key="book.isbn">
        <app-book :book="book"></app-book>
      </div>
    </div>
    <div v-if="search !== ''">
      <div v-if="filterBook.length === 0">no result</div>
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
  // Tu n'as pas besoin d'accéder à tes propriétés/méthodes en dehors de ton composant --> pas besoin de les mettre en public

  @Action private getBooks!: () => void;
  // @Mutation public setBooks!: (books: Book[]) => void; // Plus utilisé 
  @State((state) => state.shopConfig.books) public books!: Book[];
  private search = "";

  // Mieux vaut changer en created. Si tu laisse en mounted, tu risque d'avoir ton HTML rendu 2 fois : 
  // - Une première fois avec this.books qui est une liste vide
  // - Une 2e fois une fois que tu auras récupéré tes données
  private created() {
    this.getBooks();
  }

  private get filterBook() {
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
