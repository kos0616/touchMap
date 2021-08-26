import { reactive } from 'vue';

type answerState = {
  /* 題號 */
  testIndex: number;
  /* 用戶回答 */
  reply: number;
  /* 正確解答 */
  answer: number;
  /* 是否答對 */
  isPassed: boolean;
};

const state = reactive({
  count: 0,
  /* 使用過的題庫 */
  questionAsked: [] as number[],
  /* 回答狀況 */
  answerState: [] as answerState[],
});

export default { state };
