<template>
  <div class="position-relative">
    <clock id="clock" class="position-absolute" />
    <collection id="collection" class="position-absolute" />
    <map1 @getQuset="handleGetQuset" />
    <question />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import collection from './components/collection.vue';
import clock from './components/clock.vue';
import map1 from './components/map_1.vue';
import question from './components/question.vue';
import Qstate from '../API/quest';

export default defineComponent({
  components: { clock, map1, collection, question },
  setup() {
    const { dialog, setDialog } = Qstate;

    const handleGetQuset = () => {
      setDialog(true);
    };

    return { handleGetQuset, dialog };
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
