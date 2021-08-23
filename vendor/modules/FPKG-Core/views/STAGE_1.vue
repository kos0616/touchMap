<template>
  <div class="position-relative">
    <clock id="clock" class="position-absolute" />
    <collection id="collection" class="position-absolute" />
    <mapA />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import collection from './components/collection.vue';
import clock from './components/clock.vue';
import mapA from './components/map_1.vue';

export default defineComponent({
  components: { clock, mapA, collection },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#clock {
  right: 20px;
  top: 80px;
  z-index: 2;
}
#collection {
  bottom: 20px;
  right: 20px;
  z-index: 2;
}
</style>
