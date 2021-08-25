<template>
  <el-dialog
    v-model="dialog"
    title="問答"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <h4>{{ myQuest.question }}</h4>
    <hr />
    <div class="mb-2">回答:</div>
    <el-form @submit.prevent="handleSubmit">
      <el-radio-group v-model="answer">
        <el-radio
          v-for="(opt, i) in myQuest.options"
          :key="`opt_${i}`"
          :label="i + 1"
          class="w-100 py-1"
        >
          <template v-if="showAnswer">
            <i
              v-if="myQuest.answer - 1 === i"
              class="fa-fw far fa-circle text-success"
            />
            <i v-else class="fa-fw fas fa-times text-danger" />
          </template>
          {{ i + 1 }}.
          {{ opt }}
        </el-radio>
      </el-radio-group>
      <div class="mt-3">
        <el-button
          native-type="submit"
          type="success"
          class="px-4"
          title="送出答案"
          :disabled="showAnswer"
        >
          <i class="fas fa-envelope me-2"></i>
          送出答案
        </el-button>
        <el-button
          v-if="showAnswer"
          @click="dialog = false"
          class="px-4"
          title="繼續尋找寶藏"
        >
          <i class="fas fa-search me-2"></i>
          繼續尋找寶藏
        </el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, watch, toRefs, reactive } from 'vue';
import quest, { typeQuest } from '../../assets/question';
import Qstate from '../../API/quest';
import CollestState from '../../API/state';

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
      answer: 1,
      /* 是否顯示答案 */
      showAnswer: false,
    });

    /* 取得題目 */
    const getNewQuest = () => {
      const index = Math.floor(Math.random() * quest.length);
      data.myQuest = quest[index];
    };

    const handleDialogChanged = (v: boolean) => {
      if (v) {
        data.showAnswer = false;
        data.answer = 0;
        getNewQuest();
      }
    };
    watch(dialog, handleDialogChanged);

    const { state } = CollestState;

    const handleSubmit = () => {
      const trueAnswer = data.myQuest.answer;
      const myAnswer = data.answer;
      data.showAnswer = true;
      if (trueAnswer === myAnswer) {
        state.count = state.count + 1;
      }
    };

    const refData = toRefs(data);

    return { ...refData, dialog, handleSubmit };
  },
});
</script>
