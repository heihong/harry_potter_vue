<template>
  <div class="book-container">
    <p>{{ title }}</p>
    <p>{{ cover }}</p>
    <p>{{ price }} €</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class BookDetail extends Vue {
  @Prop() public title!: string;
  @Prop() public cover!: string;
  @Prop() public price!: number;
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
