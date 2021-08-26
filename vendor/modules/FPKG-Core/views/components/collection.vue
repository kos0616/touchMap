<template>
  <div class="collection d-flex align-items-center">
    <div class="collection-wrap d-flex">
      <div
        v-for="(C, i) in collection"
        :key="`collect_${i}`"
        :class="{ getItem: C.isPassed, dropItem: C.testIndex && !C.isPassed }"
        class="collection-item"
      >
        <img
          src="../../assets/collection.svg"
          class="collection-img img-fluid"
          alt="寶物"
        />
      </div>
    </div>
    <div class="collection-progress">{{ avaiableReply }}/6</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import STATE from '../../API/state';

const MAX = 6;

export default defineComponent({
  setup() {
    const { state } = STATE;

    const collection = computed(() => {
      const arr = state.answerState;
      let fill = [];
      if (arr.length < MAX) {
        fill = new Array(MAX - arr.length).fill({});
      }

      return [...arr, ...fill];
    });

    /* 有效答題 */
    const avaiableReply = computed(() => {
      return collection.value.filter((c) => c.testIndex).length;
    });

    const checkCounter = (v: number) => {
      if (v >= MAX) {
        alert('答題結束!');
      }
    };
    watch(avaiableReply, checkCounter);

    return {
      collection,
      avaiableReply,
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
      filter: contrast(0);
      transition: all 0.3s;
      &.getItem {
        filter: brightness(1) drop-shadow(1px 3px 2px rgba(0, 0, 0, 0.4));
      }
      &.dropItem {
        filter: brightness(0.2);
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
