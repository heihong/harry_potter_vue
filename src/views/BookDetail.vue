<template>
  <span>{{ title }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class BookDetail extends Vue {
  @Prop() public title!: string;
}
</script>
