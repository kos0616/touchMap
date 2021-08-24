export type typeQuest = {
  question: string;
  options: string[];
  /* 答案，注意以 1 起始 */
  answer: number;
};
export default [
  {
    question: '國家的稅收分為哪兩類？',
    options: [
      '國稅及地方稅',
      '所得稅及房屋稅',
      '地價稅及營業稅',
      '牌照稅及贈與稅',
    ],
    answer: 1,
  },
];
