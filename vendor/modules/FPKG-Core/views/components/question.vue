<template>
  <el-dialog v-model="dialog" title="問答" width="80%">
    {{ myQuest }}
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, watch, toRefs, reactive } from 'vue';
import quest, { typeQuest } from '../../assets/question';
import Qstate from '../../API/quest';

export default defineComponent({
  props: {
    moduleValue: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { dialog } = Qstate;

    const data = reactive({
      myQuest: {} as typeQuest,
    });

    /* 取得題目 */
    const getNewQuest = () => {
      const index = Math.floor(Math.random() * quest.length);
      data.myQuest = quest[index];
    };

    const handleDialogChanged = (v: boolean) => {
      if (v) {
        getNewQuest();
      }
    };
    watch(dialog, handleDialogChanged);

    const refData = toRefs(data);

    return { ...refData, dialog };
  },
});
</script>
