<template>
  <div class="collection d-flex align-items-center">
    <div class="collection-wrap d-flex">
      <div
        v-for="I in 6"
        :key="`collect_${I}`"
        :class="{ active: counter >= I }"
        class="collection-item"
      >
        <img
          src="../../assets/collection.svg"
          class="collection-img img-fluid"
          alt="寶物"
        />
      </div>
    </div>
    <div class="collection-progress">{{ counter }}/6</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import STATE from '../../API/state';

export default defineComponent({
  setup() {
    const { state } = STATE;

    const counter = computed(() => {
      if (state.count <= 6) return state.count;
      return 6;
    });

    const checkCounter = (v: number) => {
      if (v >= 6) {
        alert('Success!');
      }
    };
    watch(counter, checkCounter);

    return {
      counter,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin border {
  border-radius: 30px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0;
}

.collection {
  @include border;
  font-size: 2rem;
  background-color: rgb(33, 89, 161);
  color: #fff;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 1rem;

  .collection-wrap {
    @include border;
    background-color: rgb(181, 204, 233);
    min-height: 3rem;
    border-bottom-right-radius: 0;

    .collection-item {
      padding: 0 0.2rem;
      filter: brightness(0.2);
      transition: all 0.3s;
      &.active {
        filter: brightness(1) drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.4));
      }
      .collection-img {
        width: 60px;
      }
    }
  }

  .collection-progress {
    padding: 0 10px;
  }
}
</style>
