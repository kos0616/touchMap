<template>
  <div class="position-relative">
    <clock id="clock" class="position-absolute" />
    <collection id="collection" class="position-absolute" :MAX="MAX" />
    <map1 @getQuset="handleGetQuset" style="min-height: 100vh" />
    <question />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import collection from './components/collection.vue';
import clock from './components/clock.vue';
import map1 from './components/map_1.vue';
import question from './components/question.vue';
import { useRouter } from 'vue-router';
import Qstate from '../API/quest';
import STATE from '../API/state';

const MAX = 6;

export default defineComponent({
  components: { clock, map1, collection, question },
  setup() {
    const { dialog, setDialog } = Qstate;
    const { state, cleanAnswer } = STATE;
    const router = useRouter();

    /* 取得問題，打開答題 dialog */
    const handleGetQuset = () => {
      setDialog(true);
    };

    /* 有效答題 */
    const avaiableReply = computed(() => {
      return state.answerState.filter((c) => c.testIndex).length;
    });

    const checkCounter = (v: number) => {
      if (v >= MAX) {
        alert('答題結束!');
        router.push('/stage');
      }
    };
    watch(avaiableReply, checkCounter);

    onMounted(() => {
      setDialog(false);
      cleanAnswer();
    });

    return { handleGetQuset, dialog, MAX };
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
