<template>
  <div class="timer">{{ clock }}</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';

let CLOCK_ID: number;

export default defineComponent({
  setup() {
    const timer = ref(100);

    const clock = computed(() => {
      const min = Math.floor(timer.value / 60);
      const sec = timer.value % 60;
      const setZero = (n: number | string) => (n <= 9 ? `0${n}` : n);
      return `${setZero(min)}:${setZero(sec)}`;
    });

    /** 啟用時鐘 */
    const startClock = () => {
      CLOCK_ID = setInterval(setClock, 1000);
    };

    /** 設定時鐘 */
    const setClock = () => {
      timer.value = timer.value - 1 || 0;
    };

    /** 停止時鐘 */
    const stopClock = () => {
      clearInterval(CLOCK_ID);
    };

    watch(timer, (v: number) => {
      if (v === 0) {
        alert('TIME UP!');
        stopClock();
      }
    });

    onMounted(() => {
      startClock();
    });

    onBeforeUnmount(() => {
      stopClock();
    });

    return { clock };
  },
});
</script>

<style lang="scss" scoped>
.timer {
  border-radius: 30px;
  border-bottom-right-radius: 10px;
  background-color: rgb(33, 89, 161);
  color: #fff;
  padding: 1rem 2rem;
  font-size: 2rem;
}
</style>
